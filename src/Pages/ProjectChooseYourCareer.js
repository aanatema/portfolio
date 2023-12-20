//this page will contain the details of the choose your career project
import NavBar from "../Components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import cyc_result_44 from "../Images/cyc_result_44.png";
import Button from "react-bootstrap/Button";

function ProjectChooseYourCareer() {
  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <div>
          <h1 className="project_title">CHOOSE YOUR CAREER</h1>
          <h2 className="project_subtitle">Projet de data visualisation</h2>
        </div>
        <Button
          className="me-4 mt-4 "
          href="https://github.com/aanatema"
          target="_blank"
          variant="outline-light"
        >
          LE PROJET SUR GITHUB
        </Button>
        <div className="mt-5">
          <Row>
            <Col className="project_image " xs={12} sm={12} md={12} lg={5}>
              <Image src={cyc_result_44} fluid />
            </Col>
            <Col className="" xs={12} sm={12} md={12} lg={7}>
              <Accordion className="accordion mb-5">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <strong>CONTEXTE ET OBJECTIFS</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    Comprendre le fonctionnement d'une API en faisant des appels
                    API.<br></br> Afficher les données récupérées avec{" "}
                    <strong>Chart.js</strong>.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <strong>ORGANISATION</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    Code en solo, pair et mob programming avec code review
                    régulier.<br></br>
                    Utilisation de trello pour se répartir les tâches et
                    déterminer les priorités.<br></br>
                    Mise au point régulière avec le groupe afin de savoir
                    comment le projet se passe individuellement et si il y a des
                    besoins particuliers qui ressortent.<br></br>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <strong>TECHNOS</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>Langages :</strong> HTML, CSS, JavaScript <br></br>
                    <strong>Technos :</strong> Chart.js, API Pôle Emploi,
                    Postman
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <strong>RESULTATS ET AXES D'AMELIORATION</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    La barre de recherche est fonctionnelle, les résultats
                    affichés sont bien ceux des département recherchés. On peut
                    séléctionner ou déselctionner les données sur les
                    graphiques.
                    <br></br>
                    Mettre une image en temps que placeholder lorsqu'il n'y a
                    pas de graphiques, ajouter un loading.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Button
                className="mb-5 me-5"
                href="/projects"
                variant="outline-light"
              >
                Revenir aux projets
              </Button>
            </Col>
            <Col>
              <Button
                className="mb-5 me-4 "
                href="/projects/kind_glyphs"
                variant="outline-light"
              >
                Projet précédant
              </Button>
              <Button
                className="mb-5 "
                href="/projects/kind_glyphs"
                variant="outline-light"
              >
                Projet suivant
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default ProjectChooseYourCareer;
