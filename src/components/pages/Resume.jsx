import React from 'react';
import resumePDF from "../../assets/Resume.pdf"
import { Container, Row } from "react-bootstrap"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer"

/*
  <a href="/page">
    <img src={resumePng} alt="My image" />
  </>
*/

export default function Resume() {
  const docs = [{ uri: resumePDF }]
  return (
    <div>
      <h1>Resume</h1>
      <Container>
        <Row>
          <DocViewer pluginRenderers={DocViewerRenderers} documents={docs}/>
        </Row>
      </Container>
      {/* <a style={{color: "#c9ada7", fontSize: "25px"}} href={resumePng}>Download my Resume</a> */}
      <h4>Front-End Skills
      </h4>
      <ul>
        <li>
          React
        </li>
        <li>
          JavaScript
        </li>
        <li>
          HTML/CSS
        </li>
        <li>
          jQuery
        </li>
        <li>
          Responsive Design
        </li>
        <li>
          Bootstrap
        </li>
      </ul>
      <h4>Back-End Skills
      </h4>
      <ul>
        <li>
          RESTful APIs
        </li>
        <li>
          Node
        </li>
        <li>
          Express
        </li>
        <li>
          MySQL, Sequelize
        </li>
        <li>
          MongoDB
        </li>
      </ul>
    </div>
  );
}
