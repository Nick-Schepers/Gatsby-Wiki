import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { graphql} from "gatsby";
import Layout from "../components/layout";
import { Row, Col } from "reactstrap";
import Sidebar from "../components/Sidebar.js";

import { matchList } from "../css/layout.module.css";

export default function PersonPage({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Row>
        <Col md="4">
          <Sidebar></Sidebar>
        </Col>
        <Col md="8">
          <p>{post.frontmatter.korean_name}</p>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.name}</p>
          <p>
            Birthday: {post.frontmatter.birthday} Height:{" "}
            {post.frontmatter.height}
          </p>
          <p>
            Role: {post.frontmatter.role} Birthplace:{" "}
            {post.frontmatter.birthplace}
          </p>

          <p>{post.excerptAst.children[0].children[0].value} </p>

          <blockquote cite="link-naar-cite">
            <q>{post.frontmatter.quote}</q>
          </blockquote>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <Row>
            <Col md="4" sm="12">
              <h2>Video clip 1</h2>
              <p>
                Uitleg uitleg ja uitleg ja uitleg ja ja uitleg uitleg uitleg
                uitleg uitleg
              </p>
              <img
                src="https://via.placeholder.com/1920x1080"
                alt="Advert"
                style={{ width: "100%" }}
              />
            </Col>
            <Col md="4" sm="12">
              <h2>Video clip 1</h2>
              <p>
                Uitleg uitleg ja uitleg ja uitleg ja ja uitleg uitleg uitleg
                uitleg uitleg
              </p>
              <img
                src="https://via.placeholder.com/1920x1080"
                alt="Advert"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
          <h2>Matches: </h2>
          
          <ul className={matchList}>
            {post.frontmatter.matches.map(match => (
              <li>{match}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        name
        korean_name
        birthday
        birthplace
        height
        quote
        role
        matches
      }
      excerpt
      excerptAst
    }
  }
`;
