import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gyan Shresth </span>
            from <span className="purple"> Jharkhand, India.</span>
            <br />I am a 9th grader, studying in St.Xavier's School
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />Reading Books
            </li>
            
          </ul>

          <p style={{ color: "rgb(172, 161, 126)" }}>
            "Its not a bug, its an undocummneted code!"{" "}
          </p>
          <footer className="blockquote-footer">Gyan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
