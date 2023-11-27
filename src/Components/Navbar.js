//this page is for the main navbar of the site.

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../index.css";

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" className="title">
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-target="#navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Container >
            <Navbar.Brand className="romane_boireau" href="/">
              ROMANE BOIREAU
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link className="chapitre" href="/about">
                A PROPOS
              </Nav.Link>
              <Nav.Link className="chapitre" href="/projects">
                PROJETS
              </Nav.Link>
              <Nav.Link className="chapitre" href="/contact">
                CONTACT
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
