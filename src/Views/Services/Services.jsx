import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faMobileAlt,
  faCode,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import "./Services.css";

const servicesData = [
  {
    icon: faDesktop,
    title: "Web Design",
    description:
      "We create visually appealing and user-friendly web designs that leave a lasting impression on your audience.",
  },
  {
    icon: faMobileAlt,
    title: "Responsive Design",
    description:
      "Our websites are designed to look and function perfectly on various devices, ensuring a seamless user experience.",
  },
  {
    icon: faCode,
    title: "Web Development",
    description:
      "We develop robust and feature-rich websites and web applications using the latest technologies and best practices.",
  },
  {
    icon: faPaintBrush,
    title: "UI/UX Design",
    description:
      "Our UI/UX designers craft intuitive and visually stunning interfaces that enhance user engagement and satisfaction.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <Container>
        <h2 className="section-title">Services</h2>
        <Row>
          {servicesData.map((service, index) => (
            <Col sm={6} md={3} className="service" key={index}>
              <FontAwesomeIcon icon={service.icon} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
