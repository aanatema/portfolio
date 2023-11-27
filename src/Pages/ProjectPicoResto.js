
import NavBar from "../Components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import pico_resto_start_screen from "../Images/pico_resto_start_screen.jpg";

function ProjectPicoResto() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} className="project_title">
            <h1>PICO RESTO</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="project_subtitle">
            <h3>Mini jeu vidéo inspiré du jeu "Overcooked"</h3>
          </Col>
        </Row>
        {/* outils, conditions de travail, durée */}
        <Row xs={1} sm={1} md={2} lg={2} className="infos">
          <Col className="infos_solo">
            <strong>EQUIPE :</strong> 4 personnes
          </Col>
          <Col className="infos_solo">
            <strong>DUREE : </strong>2 semaines, 5 jours réels
          </Col>
        </Row>
        <Row>
          <img
            className="img_project my-3"
            src={pico_resto_start_screen}
            fluid
          />
          <Col xs={12} md={12} className="description_projet mt-2"></Col>
          <Col xs={12}>
            <Accordion className="accordion mb-5">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {" "}
                  <strong>OBJECTIFS</strong>
                </Accordion.Header>
                <Accordion.Body>
                  Créer un petit jeu avec la "fantasy console" PICO-8. Pico Resto est le tout premier projet que auquel j'ai participé durant ma formation.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  {" "}
                  <strong>ORGANISATION</strong>
                </Accordion.Header>
                <Accordion.Body>
                Choix commun de l'équipe du thème : un food truck où le joueur contrôle son le ou la cuisinière sélectionné.e et doit préparer les commandes des clients.               <br></br>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <strong>TÂCHES</strong>
                </Accordion.Header>
                <Accordion.Body>
                 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <strong>RESULTATS ET AXES D'AMELIORATION</strong>
                </Accordion.Header>
                <Accordion.Body>
                  L'inscritpion, le connexion, la déconnexion et la suppression
                  de compte sont fonctionnels. Toutes les routes des pages
                  fonctionnent. Les éléments présent dans la base de données
                  s'affichent sur le site. La page "vendre un meuble" est
                  fonctionnelle et le meuble créé apparaît bien sur la page
                  d'accueil.
                  <br></br>
                  <br></br>
                  L'affichage des articles ne suis pas la logique des trois
                  premiers articles affichés. Lier la page admin où Lauréline
                  accepte ou refuse la mise en vente d'un meuble. Renforcer la
                  sécurité, notamment sur les mots de passe.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectPicoResto;
