import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiDart,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiTensorflow,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
   <a style={{color: 'white'}} href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
        <DiJavascript1 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a style={{color: 'white'}} href="https://nodejs.org/en" >
        <DiNodejs />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a style={{color: 'white'}} href="https://reactjs.org/" >
          <DiReact />
          </a>
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a style={{color: "white"}} href="https://dart.dev/">  <DiDart/></a>
      
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <a style={{color: "white"}} href="https://git-scm.com/">  <DiGit /></a>
      
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a style={{color: "white"}} href="https://firebase.google.com"><SiFirebase /></a>
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a style={{color: "white"}} href="https://python.org/"><DiPython /></a>
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a style={{color: "white"}} href="https://www.tensorflow.org/"><SiTensorflow /></a>
        
      </Col>
     
    </Row>
  );
}

export default Techstack;
