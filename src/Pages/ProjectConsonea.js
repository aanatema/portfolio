//this page will contain the details of the consonea project

import NavBar from "../Components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import consonea_mise_en_vente from "../Images/consonea_mise_en_vente.png";

function ProjectConsonea() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} className="project_title">
            <h1>CONSONEA</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="project_subtitle">
            <h3>Plateforme de vente de meubles</h3>
          </Col>
        </Row>
        {/* outils, conditions de travail, durée */}
        <Row xs={1} sm={1} md={2} lg={2} className="infos">
          <Col className="infos_solo">
            <strong>EQUIPE :</strong> 9 personnes, répartition 4-5
          </Col>
          <Col className="infos_solo">
            <strong>DUREE : </strong>2 semaines, 6 jours réels
          </Col>
        </Row>
        <Row>
          <img
            className="img_project my-3"
            src={consonea_mise_en_vente}
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
                  Création d'un site e-commerce répondant aux besoins de
                  Lauréline qui vient de monter son entreprise de vente de
                  meuble d'occasion. Le projet se déroule sur 2 semaines avec
                  pour seules contraintes de diviser l'équipe, une partie Front
                  et une partie Back, et d'échanger les rôles lors de la
                  deuxième semaine.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  {" "}
                  <strong>ORGANISATION</strong>
                </Accordion.Header>
                <Accordion.Body>
                  Les choix d'organisation ont été décidés le premier jour du
                  projet.<br></br>
                  <br></br>
                  <li>
                    Discussion commune sur les technos et langages à utiliser,
                    réflexion sur les besoins du Front afin de créer les appels
                    API necessaires.{" "}
                  </li>
                  <br></br>
                  <li>
                    Division de l'équipe en deux : Back (4pers) et Front
                    (5pers).
                  </li>{" "}
                  <br></br>
                  <li>Installation commune et partage du repo Github.</li>
                  <br></br>
                  <li>
                    Daily chaque matin pour échanger sur les objectifs de la
                    journée.
                  </li>{" "}
                  <br></br>
                  <li>
                    Mise en place d'un Trello et d'un journal de bord pour
                    chaque équipe afin de suivre les avancées et de faciliter la
                    transition lors de la deuxième semaine.
                  </li>
                  <br></br>
                  <li>
                  Retro / Démo 
                  </li>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <strong>TÂCHES</strong>
                </Accordion.Header>
                <Accordion.Body>
                  SEMAINE 1 <br></br>
                  <strong>Back :</strong> Création de la BDD avec mySQL,
                  création du serveur avec Express.<br></br>
                  <strong>Front :</strong> Création de la maquette, création des
                  routes avec React, création du front.
                  <br></br>
                  <br></br>
                  SEMAINE 2<br></br>
                  <strong>Back :</strong> Création de l'API, mécanique d'inscription et
                 de connexion<br></br>
                  <strong>Front :</strong> Affichage des données de la BDD sur
                  le site
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

export default ProjectConsonea;
