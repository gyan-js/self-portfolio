import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container style={{borderTop: '2px solid '}} fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Gyan Shresth </h3>
        </Col>
       
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/gyan-js"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub size={28} />
              </a>
            </li>
           
            <li className="social-icons">
              <a
                href="mailto:gyanshresth03@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGmail size={28} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/wtf.itz_gyan"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={28} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;