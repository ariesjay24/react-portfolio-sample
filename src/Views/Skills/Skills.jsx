import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./Skills.css";

const skillsData = [
  {
    icon: faHtml5,
    title: "HTML5",
    description:
      "HTML5 is the latest version of HTML used for structuring and presenting content on the web. It provides enhanced support for multimedia and improved semantics.",
  },
  {
    icon: faCss3,
    title: "CSS3",
    description:
      "CSS3 is the latest version of CSS used for styling web pages. It includes features like animations, transitions, and responsive design capabilities.",
  },
  {
    icon: faJs,
    title: "JavaScript",
    description:
      "JavaScript is a versatile scripting language used for adding interactivity to web pages. It's essential for creating dynamic and interactive web applications.",
  },
  {
    icon: faReact,
    title: "React",
    description:
      "React is a popular JavaScript library for building user interfaces. It simplifies the process of creating reusable UI components and managing application state.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <Container>
        <h2 className="section-title">Skills</h2>
        <Row>
          {skillsData.map((skill, index) => (
            <Col sm={6} md={3} className="skill" key={index}>
              <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
