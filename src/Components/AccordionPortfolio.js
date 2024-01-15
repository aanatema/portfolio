import NavBar from "../Components/Navbar";
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
          <h1 className="project_title">PORTFOLIO V.1</h1>
          <h2 className="project_subtitle">Projet React</h2>
        </div>
        <Button
          className="me-4 mt-4 "
          href="https://github.com/aanatema/projet-collectif-dataviz-myriam-romane-bradley-mehdi"
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
                    Approfondir ce qui a été abordé lors du projet <a href="/projects/consonea">Consonea </a> : les routes, l'organisation des fichiers, la décomposition en composants. <br></br>
                    Mener à terme un projet plus conséquent que ce que j'ai pu faire avant. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="accordion">
                  <Accordion.Header>
                    <strong>ORGANISATION</strong>
                  </Accordion.Header>
                  <Accordion.Body className="accordion">
                    Réflexion sur les éléments qui vont être présents sur la page et comment les organiser ente eux. Décision d'utiliser le framework React-Bootstrap. <br></br>
                    Création d'un visuel de base sur Figma pour organiser mes pages. <br></br>
                    Lancement du projet en m'appuyant sur la documentation de React.
                    Travail sur mon temps perso après les cours, échange fréquent avec les personnes de ma promo afin de voir ce qui peut être amélioré.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="accordion">
                  <Accordion.Header>
                    <strong>TECHNOS</strong>
                  </Accordion.Header>
                  <Accordion.Body className="accordion">
                    <strong>Langages :</strong> HTML, CSS, JavaScript <br></br>
                    <strong>Technos :</strong> React Bootstrap, EMAILJS
                    
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="accordion">
                  <Accordion.Header>
                    <strong>RESULTATS ET AXES D'AMELIORATION</strong>
                  </Accordion.Header>
                  <Accordion.Body className="accordion">
                    Le contenu de mon portfolio correspond à ce que je souhaite montrer, le formulaire de contact est fonctionnel. J'ai beaucoup appris grâce aux recherches que le projet m'a poussé à faire. J'ai pu échanger et recevoir des conseils de mes pairs. Je retiens des leçons de ce projet, notamment à me forcer à prioriser certaines tâches.
                    <br></br>
                    <br></br>
                    J'ai atteint le MVP que je m'étais fixé mais le style graphique ne me correspond pas vraiment, il est trop générique pour moi. Pourtant je réalise que j'ai perdu une quantité de temps non négligeable sur des détails visuels. Je prendrai le temps de retravailler son apparence dans le futur.
                    <br></br>
                    <br></br>
                    Peut-être revoir la manière dont je détaille les projets.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="accordion">
                  <Accordion.Header>
                    <strong>MODIFICATIONS PREVUES</strong>
                  </Accordion.Header>
                  <Accordion.Body className="accordion">
                    Refactorisation du code : amélioration de l'organisation, révision des composants et des noms des fichiers.
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
              <Col className=''>
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
