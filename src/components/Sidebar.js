import React from "react";
import { css } from "@emotion/react";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/font-awesome.js";

const Sidebar = () => (
  <div
    css={css`
      position: relative;
      margin-top: -10vh;
    `}
  >
    <img
      src="https://via.placeholder.com/3000x4000"
      alt="Advert"
      css={css`
        width: 100%;
        box-shadow: 10px 10px #9bdd26;
      `}
    />
    <div
      css={css`
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      `}
    >
      <a
        href="/"
        className="official"
        css={css`
          text-decoration: none;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            border: none;
            border-bottom: 5px solid #9bdd26;
          `}
        >
          <p>OFFICIAL PROFILE</p>
          <FontAwesomeIcon icon={"external-link-alt"} />
        </div>
      </a>
      <div className="socials">
        <p
          css={css`
            margin-top: 2em;
          `}
        >
          SOCIAL MEDIA
        </p>
        <Row>
          <Col padding="0">
            <a href="/">
              <img src="https://via.placeholder.com/100x100" alt="social" />
            </a>
          </Col>
          <Col>
            <a href="/">
              <img src="https://via.placeholder.com/50x50" alt="social" />
            </a>
          </Col>
          <Col>
            <a href="/">
              <img src="https://via.placeholder.com/200x200" alt="social" />
            </a>
          </Col>
          <Col>
            <a href="/">
              <img src="https://via.placeholder.com/50x50" alt="social" />
            </a>
          </Col>
          <Col>
            <a href="/">
              <img src="https://via.placeholder.com/50x50" alt="social" />
            </a>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);

export default Sidebar;
