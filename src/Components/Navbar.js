//this page is for the main navbar of the site.

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
      <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand className="me-auto"  href="/"  style={{fontSize:"1.5em"}}>Romane Boireau</Navbar.Brand>
          {/* m= margin / s=start set margin or padding LEFT or margin or padding START */}
          <Nav className="ms-auto" style={{fontSize:"1.5em"}}>
            <Nav.Link href="/about">A propos</Nav.Link>
            <Nav.Link href="/projects">Projets</Nav.Link>
            <Nav.Link href="/resume">CV</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      );
}

export default NavBar;
