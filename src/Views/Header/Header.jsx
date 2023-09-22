import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";
import routes from "../routes";

const Header = () => {
  return (
    <Navbar className="navbar" expand="md">
      <Navbar.Brand className="navbar-brand" href="/">
        PORTFOLIO
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Item className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Link to="/skills" className="nav-link">
              Skills
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
