import NavBar from "../Components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import pico_resto_start_screen from "../Images/pico_resto_start_screen.jpg";
import Button from "react-bootstrap/Button";

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
            <Row className="my-3">
              <Button href="" variant="outline-success">
                LE PROJET SUR GITHUB
              </Button>
            </Row>
            <Row className="my-3">
              <Button href="https://www.lexaloffle.com/bbs/?tid=53280" target="_blank" variant="outline-success">
                JOUEZ AU JEU
              </Button>
            </Row>
          <Col xs={12} md={12} className="description_projet mt-2"></Col>
          <Col xs={12}>
            <Accordion className="accordion mb-5">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {" "}
                  <strong>OBJECTIFS</strong>
                </Accordion.Header>
                <Accordion.Body>
                  Apprendre à coder en équipe, à se répartir les tâches, à
                  découvrir comment se documenter sur un sujet, une techno.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  {" "}
                  <strong>ORGANISATION</strong>
                </Accordion.Header>
                <Accordion.Body>
                  <li>
                    Discussion commune et choix du thème du jeu le premier jour
                    : le/la joueur.euse contrôle un personnage qui doit préparer
                    les commandes des clients et leur remettre dans un temps
                    imparti.
                  </li>

                  <br></br>
                  <li>Mise en place d'un trello</li>
                  <br></br>
                  <li>
                    Découverte des ressources de manière individuelle, mise en
                    commun de ce qui à été compris et ce qui a besoin
                    d'approfondissement.
                  </li>
                  <br></br>
                  <li>Code en mob et en pair-programming</li>
                  <br></br>
                  <li>Retro / Démo</li>
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
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectPicoResto;
