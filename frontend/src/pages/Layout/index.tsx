import { Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Outlet, NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';

export function Layout() {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
        <Container fluid>
          <Navbar.Brand href="/">SpaceRockets</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" eventKey={"1"}>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/rockets" eventKey={"2"}>Rakéták</Nav.Link>
              <Nav.Link as={NavLink} to="/addnew" eventKey={"3"}>Hozzáadás</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}