import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import myImg from "../../Assets/boy_code2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "react-bootstrap/Button";

function Home2() {
  return (
    <Container style={{borderTop: '2px solid '}} fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             
              I started my programming journey in <strong className="b-purple">2021</strong> and I till now I have learnt diffrent <strong className="b-purple" >programming languages</strong> and <strong className="b-purple"> tech stack</strong>.
              <br />
              <br />
              I am fluent in classics like <strong className="b-purple">Javascript, Python and Dart</strong>
              <br />
              <br/>
              My field of interest's are building new <strong className="b-purple"> Web & Mobile Application</strong> and also in areas related to <strong className="b-purple">AI and Machine Learning.</strong>
              <br />
              <br />
               I also apply my passion for developing projects with <strong className="b-purple">NodeJs</strong>, <strong className="b-purple">React Native</strong>, <strong className="b-purple">Firebase</strong> and <strong className="b-purple">Modern Python Libraries</strong> like <strong className="b-purple">Tensorflow and Keras</strong>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img style={{marginLeft: '50px'}} src={myImg} className="about-logo img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
        
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
