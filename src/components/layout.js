import React from "react";
import { css } from "@emotion/react";
import { useStaticQuery, Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 1200px;
        padding: ${rhythm(0.5)};
        padding-top: ${rhythm(0.5)};
      `}
    >
      <div>
        <Link to={`/`}>
          <h3
            css={css`
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to={`/about/`}
          css={css`
            float: right;
            padding-left: ${rhythm(1.5)};
          `}
        >
          About
        </Link>
        <Link
          to={`/`}
          css={css`
            float: right;
            padding-left: ${rhythm(1.5)};
          `}
        >
          Home
        </Link>
        <Link
          to={`/my-files/`}
          css={css`
            float: right;
            padding-left: ${rhythm(1.5)};
          `}
        >
          All Files
        </Link>
      </div>
      <div
        css={css`
          width: 100vw;
          height: 15vh;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          background: #d4d4d4;
          margin-bottom: ${rhythm(1)};
          z-index: -99;
        `}
      ></div>
      <div>{children}</div>
    </div>
  );
}
