import { Row, Col, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

export function Home() {
  return (
    <>
        <Navbar>
            <Navbar.Brand>Boomsticks</Navbar.Brand>
            <Nav>
                <Nav.Link href="/NoPage">Error</Nav.Link>
            </Nav>
        </Navbar>
        <main>
        <Outlet/>
        </main>
        
    </>
  )
}