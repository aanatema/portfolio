import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import pp from "../Images/pp.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../index.css";

function Description() {
  return (
    <Container className="mt-5" style={{ color: "#cdcfce" }}>
      <div id="intro">
        <h1>ROMANE BOIREAU</h1>
        <br></br>
        <h4>
          Développeuse Web Junior en recherche d'alternance pour{" "}
          <span id="ada">Février 2024</span>.
        </h4>
      </div>
      <div className="mt-5">
        <Row>
          <Col className="me_img my-4" xs={12} sm={12} md={5} lg={5}>
            <Image src={pp} fluid />
            <Button
              className="me-4 mb-5 mt-4 "
              href=""
              target="_blank"
              variant="outline-warning"
            >
              {" "}
              VOIR MON CV
            </Button>
          </Col>
          <Col className="description my-4 " xs={12} sm={12} md={7} lg={7}>
            <p>
              Après 3 ans d'études des{" "}
              <span id="ada">
               langues et des cultures russes, anglaises et italiennes
              </span>{" "}
              (Traductions, interprétariat et médiations interculturelles), j'ai
              choisi de changer de voie pour quelque chose de plus tangible : le
              code.
              <br></br>
              <br></br>
              J'aime la théorie lorsque je peux l'appliquer, j'aime voir ma
              courbe de progression, j'aime comprendre comment les choses
              fonctionnent. Coder m'apporte tous ces éléments.
              <br></br>
              <br></br>
              Les langages informatiques ne sont pas si différents des langues
              parlées, je ne suis pas dépaysée !<br></br>
              <br></br>
              Actuellement en formation à <span id="ada">Ada Tech School</span>,
              je découvre de nouvelles technos, de nouveaux langages et apprends
              à travailler avec sur de nombreux projets. Découvrez les{" "}
              <a href="/projects">
                <span id="link">ici</span>
              </a>{" "}
              !<br></br>
              <br></br>
              Je recherche une alternance Full Stack à partir de Février 2024 :
              <span id="ada"> 4 jours entreprise </span> /
              <span id="ada"> vendredi école</span>.<br></br>
              <br></br>
              Mes coordonnées sont{" "}
              <a href="/contact">
                <span id="link">ici</span>
              </a>{" "}
              !
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Description;
