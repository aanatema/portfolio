import NavBar from "../Components/Navbar";
import PRCarousel from "../Components/PRCarousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import ReturnProjectButton from "../Components/ReturnProjectButton";

function ProjectPicoResto() {
  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <div>
          <h1 className="project_title">PICO RESTO</h1>
          <h2 className="project_subtitle">Mini jeu rétro avec PICO-8</h2>
        </div>
        <Button
          className="me-4 mt-4 "
          href="https://github.com/https://github.com/aanatema/projet-collectif-pico-8-pico-resto"
          target="_blank"
          variant="outline-warning"
        >
          LE PROJET SUR GITHUB
        </Button>
        <Button
          className="me-4 mt-4 "
          href="https://www.lexaloffle.com/bbs/?tid=53280"
          target="_blank"
          variant="warning"
        >
          JOUER AU JEU
        </Button>
        <Row>
          <Col className="project_image my-5" xs={12} sm={12} md={12} lg={5}>
            <PRCarousel></PRCarousel>
          </Col>
          <Col className="" xs={12} sm={12} md={12} lg={7}>
            <Accordion className="accordion mb-5">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <strong>CONTEXTE ET OBJECTIFS</strong>
                </Accordion.Header>
                <Accordion.Body>
                  Premier projet de l'année.<br></br>
                  Découvrir un premier langage (LUA), apprendre à coder en mob
                  programming, à se documenter.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <strong>ORGANISATION ET TECHNOS</strong>
                </Accordion.Header>
                <Accordion.Body>
                  Code en mob et pair programming. <br></br>
                  Trello et code review en fin de journée.<br></br>
                  Langage <strong>LUA</strong> via la fantasy console PICO-8.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <strong>TÂCHES</strong>
                </Accordion.Header>
                <Accordion.Body>
                  SEMAINE 1 <br></br>
                  Création du visuel du food truck, création des sprites des
                  personnages jouables et des personnages non jouables.<br></br>
                  Début des déplacements du personnage jouable et automatisation
                  des mouvements des personnages non jouables<br></br>
                  <br></br>
                  SEMAINE 2<br></br>
                  Ajout du timer, du score, des commandes aléatoires des
                  clients, de la musique et des bruitages<br></br>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <strong>RESULTATS ET AXES D'AMELIORATION</strong>
                </Accordion.Header>
                <Accordion.Body>
                  Le jeu est fonctionnel, le personnage jouable ne peux pas
                  sortir du cadre du food truck, le score s'incrémente bien en
                  fonction des commandes données aux clients. La fin du timer
                  déclenche bien la fin du jeu avec affichage du score. Il est
                  impossible de donner une commande si elle n'est pas complète.
                  <br></br>
                  <br></br>
                  Les commandes des clients sont toutes les mêmes sauf en
                  quantité, changer le nombre d'ingrédients présents
                  améliorerait la dynamique du jeu.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <ReturnProjectButton></ReturnProjectButton>
            <Button
              className="mb-5 "
              href="/projects/consonea"
              variant="outline-warning"
            >
              Projet suivant
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectPicoResto;
