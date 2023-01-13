import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiGithub,
  SiNetlify,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a style={{color: 'white'}} href="https://www.netlify.com">
        <SiNetlify/>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a style={{color: 'white'}} href="https://code.visualstudio.com">
        <SiVisualstudiocode />
        </a>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a style={{color: 'white'}} href="https://vercel.com">
        <SiVercel />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a style={{color: 'white'}} href="https://www.github.com">
        <SiGithub/>
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
