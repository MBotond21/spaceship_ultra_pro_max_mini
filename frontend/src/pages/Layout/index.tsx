import { Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';

export function Layout() {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><span className="bi bi-house-door-fill"></span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/rockets">Rakéták</Link></Nav.Link>
              <Nav.Link><Link to="/addnew">Hozzáadás</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}