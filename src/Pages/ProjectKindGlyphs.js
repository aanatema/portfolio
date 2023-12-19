import NavBar from "../Components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import an_allegory_of_victory from "../Images/an_allegory_of_victory.jpg";
import Button from "react-bootstrap/Button";

function ProjectKindGlyphs() {
  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <div>
          <h1 className="project_title">KIND GLYPHS</h1>
          <h2 className="project_subtitle">Extension navigateur de censure</h2>
        </div>
        <Button
          className="me-4 mt-4  "
          href="https://github.com/aanatema"
          target="_blank"
          variant="outline-light"
        >
          LE PROJET SUR GITHUB
        </Button>
        <Row>
          <Col className="project_image my-5" xs={12} sm={12} md={12} lg={5}>
            <Image src={an_allegory_of_victory} fluid />
          </Col>
          <Col className="" xs={12} sm={12} md={12} lg={7}>
            <Accordion className="accordion mb-5">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <strong>CONTEXTE ET OBJECTIFS</strong>
                </Accordion.Header>
                <Accordion.Body>
                  Projet perso. <br></br>
                  Comprendre le fonctionnement des extensions, apprendre à
                  manipuler des pages web, comprendre le DOM. <br></br>Découvrir
                  les regex.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <strong>ORGANISATION</strong>
                </Accordion.Header>
                <Accordion.Body>
                  Tenue d'un journal de bord et d'un trello pour tenir compte de
                  mes avancées et des problèmes rencontrés.<br></br>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <strong>Langages</strong>
                </Accordion.Header>
                <Accordion.Body>
                  <strong>Langages :</strong> HTML, CSS, JavaScript <br></br>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <strong>RESULTATS ET AXES D'AMELIORATION</strong>
                </Accordion.Header>
                <Accordion.Body>En cours...</Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Button
              className="mb-5 me-5"
              href="/projects"
              variant="outline-light"
            >
              Revenir aux projets
            </Button>
            <Button
              className="mb-5 "
              href="/projects/pico_resto"
              variant="outline-light"
            >
              Projet suivant
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectKindGlyphs;
