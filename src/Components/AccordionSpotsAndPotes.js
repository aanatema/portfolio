import PortfolioCarousel from "../Components/PortfolioCarousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import ReturnProjectButton from "../Components/ReturnProjectButton";
import "../index.css";

function AccordionPortfolio() {
  return (
    <>
      <Container className="mt-5">
        <div>
          <h1 className="project_title">SPOTS & POTES</h1>
          <h2 className="project_subtitle">Application Android mobile</h2>
        </div>
        <Button
          className="me-4 mt-4 "
          href="https://github.com/aanatema/crom"
          target="_blank"
          variant="outline-warning"
        >
          LE PROJET SUR GITHUB
        </Button>
        <div className="mt-5">
          <Row>
            <Col className="project_image mt-3" xs={12} sm={12} md={12} lg={5}>
              <PortfolioCarousel></PortfolioCarousel>
            </Col>
            <Col xs={12} sm={12} md={12} lg={7}>
              <Accordion className="accordion mb-5" flush defaultActiveKey="0">
                <Accordion.Item eventKey="0" className="accordion">
                  <Accordion.Header className="accordion">
                    <strong>CONTEXTE ET OBJECTIFS</strong>
                  </Accordion.Header>
                  <Accordion.Body className="accordion">
                    Projet d'un mois divisé en deux : 2 semaines Front et 2
                    semaines Back.
                    <br></br>
                    Créer une application mobile Android reliée à une base de
                    données en utilisant Android Studio. Découvrir et appliquer
                    l'architecture MVVM.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="accordion">
                  <Accordion.Header>
                    <strong>ORGANISATION</strong>
                  </Accordion.Header>
                  <Accordion.Body className="accordion">
                    Semaines Front : Lecture de la documentation d'Android
                    Studio et de Kotlin, création de la maquette avec Figma.
                    Créations des pages d'accueil, de favoris et d'ajout d'un
                    spot de surf. Semaines Back : Création d'une base de données
                    avec MySQL Workbench. Liaison de l'API back avec le front.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="accordion">
                  <Accordion.Header>
                    <strong>TECHNOS</strong>
                  </Accordion.Header>
                  <Accordion.Body className="accordion">
                    <strong>Langages :</strong> Android Studio, Kotlin, Gradle{" "}
                    <br></br>
                    <strong>Technos :</strong> Go, MySQL, RetroFit
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="accordion">
                  <Accordion.Header>
                    <strong>RESULTATS ET AXES D'AMELIORATION</strong>
                  </Accordion.Header>
                  <Accordion.Body className="accordion">
                    La page d'accueil affiche tous les spots de surf contenus
                    dans la base de donnée. Il ets possible de "liker" ses spots
                    favoris et de les retrouver dans la page des favoris.
                    L'ajout de spot est fonctionnel, il apparaît bien sur la
                    page d'accueil et dans la base de données.
                    <br></br>
                    <br></br>
                    Il est nécessaire de recharger l'application pour que les
                    spots mis en favoris s'affichent dans la page correspondante
                    et que l'étoile vide se remplisse. Ajouter un indicateur
                    visuel pour rendre la page sur laquelle on se trouve plus
                    évidente. Permettre aux utilisateurs d'ajouter la photo d'un
                    spot à partir de leur téléphone au lieu d'entrer une URL.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Button
                className="mb-2 me-4 "
                href="/projects/kind_glyphs"
                variant="outline-warning"
              >
                Projet précédant
              </Button>
              <Button
                className="mb-2 "
                href="/projects/pico_resto"
                variant="outline-warning"
              >
                Projet suivant
              </Button>
              <Row>
                <Col className="">
                  <ReturnProjectButton></ReturnProjectButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default AccordionPortfolio;
