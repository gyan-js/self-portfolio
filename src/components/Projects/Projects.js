import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ml from "../../Assets/Projects/Machine_learning.png";
import expense from "../../Assets/Projects/Expense_snake.png";
import showcase from "../../Assets/Projects/Showcase_app.png";
import quizGame from "../../Assets/Projects/Quiz_Game.png";
import trex from "../../Assets/Projects/TREX_runner.png";
import crypteux from "../../Assets/Projects/Crypteux_market.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizGame}
              isBlog={false}
              title="Quiz Game"
              description="A basic quiz game, the quiz contains some questions related to prgramming. Its built with the basic web stack JS, HTML and CSS. The question and answers are fetched from the JSON object, which I cretaed myself. This game also shows the total corract-wrong ratio."
              ghLink="https://github.com/gyan-js/quiz_game_js"
              demoLink="https://gyan-js.github.io/quiz_game_js/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypteux}
              isBlog={false}
              title="Crypteux"
              description="Crypteux is a cryptocurrency market app, which shows the current price of the available cryptocurrencies. It also shows the price change in the last 24 hours, 3 months and 1 year. The data is fetched from the CoinGecko API. The app is fully built using ReactJS and Bootstrap. You can also switch between available currencies."
              //ghLink="https://github.com/gyan-js"
              demoLink="https://crypteux-market.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={showcase}
              isBlog={false}
              title="Showcase template"
              description="A simple app showcase template, which is built using ReactJS and Bootstrap. It contians the title page, the descriptionpage and the features apge. The app is fully responsive. Just Fork It, Edit it , Run It and Use It."
              ghLink="https://github.com/gyan-js"
              demoLink="https://github.com/gyan-js"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="Hand gesture"
              description="Hang Gesture Recognition. It is one of my begineer python machine learning program. It uses the basic libraries OpenCV and Mediapipe. It detects different hand gestures, currently it is prgrammed only for LIKE and DISLIKE gesture."
              ghLink="https://github.com/gyan-js"
              demoLink="https://github.com/gyan-js"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trex}
              isBlog={false}
              title="T-Rex Runner"
              description="It is my ever first 2D-project of my game-development journey. It is an infinite runner game. It uses the P5Js library, P5Js is one of the graphics library of Javascript."
              ghLink="https://github.com/gyan-js"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Snake"
              description="ExpenseSnake lets you keep a track of your income and expenditure, ensuring that you keep a track of your finances and don't waste your precious money. Its is built using ReactJS, and it also uses some CSS stylings. It uses the local storage to store the data."
              ghLink="https://github.com/gyan-js"
            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
