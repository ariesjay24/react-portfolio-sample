import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Quick Links */}
          <Col md={4} sm={12}>
            <h5>Quick Links</h5>
            <ul className="quick-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/skills">Skills</a>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4} sm={12}>
            <h5>Contact Info</h5>
            <ul className="contact-info">
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Manila, City
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} /> 09123456789
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> info@example.com
              </li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col className="newsletter" md={4} sm={12}>
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter for updates:</p>
            <Form>
              <Form.Group controlId="email">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Button className="cta" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <div className="footer-bottom">
        <Container>
          <Row>
            <Col sm={12}>
              <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
