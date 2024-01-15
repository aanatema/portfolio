//this page will contain the details of the consonea project

import NavBar from "../Components/Navbar";
import CCarousel from "../Components/CCarousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import consonea_mise_en_vente from "../Images/consonea_mise_en_vente.png";
import Button from "react-bootstrap/Button";
import ReturnProjectButton from "../Components/ReturnProjectButton";

function ProjectConsonea() {
  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <div>
          <h1 className="project_title">CONSONEA</h1>
          <h2 className="project_subtitle">Site de vente de meubles</h2>
        </div>
        <Button
          className="me-4 mt-4 "
          href="https://github.com/aanatema/projet-collectif-site-e-commerce-de-mobilier-Consonea"
          target="_blank"
          variant="outline-warning"
        >
          LE PROJET SUR GITHUB
        </Button>
        <Row className="mt-5">
          <Col className="project_image mt-3" xs={12} sm={12} md={12} lg={5}>
            <CCarousel />
          </Col>
          <Col className="" xs={12} sm={12} md={12} lg={7}>
            <Accordion className="accordion mb-5" flush defaultActiveKey="0">
              <Accordion.Item eventKey="0" className="accordion">
                <Accordion.Header>
                  <strong>CONTEXTE ET OBJECTIFS</strong>
                </Accordion.Header>
                <Accordion.Body className="accordion">
                  Création d'un site e-commerce répondant aux besoins de
                  Lauréline qui vient de monter son entreprise de vente de
                  meuble d'occasion. Le projet se déroule sur 2 semaines avec
                  pour seules contraintes de diviser l'équipe, une partie Front
                  et une partie Back, et d'échanger les rôles lors de la
                  deuxième semaine.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="accordion">
                <Accordion.Header>
                  <strong>ORGANISATION ET TECHNOS</strong>
                </Accordion.Header>
                <Accordion.Body className="accordion">
                  Les choix d'organisation ont été décidés le premier jour du
                  projet.<br></br>
                  <br></br>
                  Division de l'équipe en deux : Back (4pers) et Front (5pers).
                  <br></br>
                  Discussion commune sur les technos et langages à utiliser,
                  réflexion sur les besoins du Front afin de créer les appels
                  API necessaires.
                  <br></br>
                  Installation commune et partage du repo Github.
                  <br></br>
                  Daily chaque matin pour échanger sur les objectifs de la
                  journée. <br></br>
                  Mise en place d'un Trello et d'un journal de bord pour chaque
                  équipe afin de suivre les avancées et de faciliter la
                  transition lors de la deuxième semaine.
                  <br></br>
                  Retro / Démo
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="accordion">
                <Accordion.Header>
                  <strong>TÂCHES</strong>
                </Accordion.Header>
                <Accordion.Body className="accordion">
                  SEMAINE 1 <br></br>
                  <strong>Back :</strong> Création de la BDD avec mySQL,
                  création du serveur avec Express.<br></br>
                  <strong>Front :</strong> Création de la maquette, création des
                  routes avec React, création du front.
                  <br></br>
                  <br></br>
                  SEMAINE 2<br></br>
                  <strong>Back :</strong> Création de l'API, mécanique
                  d'inscription et de connexion<br></br>
                  <strong>Front :</strong> Affichage des données de la BDD sur
                  le site
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="accordion">
                <Accordion.Header>
                  <strong>RESULTATS ET AXES D'AMELIORATION</strong>
                </Accordion.Header>
                <Accordion.Body className="accordion">
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
            <Button
              className="mb-2 me-4 "
              href="/projects/pico_resto"
              variant="outline-warning"
            >
              Projet précédant
            </Button>
            <Button
              className="mb-2 "
              href="/projects/choose_your_career"
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
      </Container>
    </>
  );
}

export default ProjectConsonea;
