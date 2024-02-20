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
        <h2>
          Développeuse Web Junior en recherche d'une alternance Front ou Full
          Stack à partir de <span id="ada"> Mars 2024</span>.
        </h2>
        <br></br>
        <h5>
          Rythme de <span id="ada"> 4 jours entreprise </span> /
          <span id="ada"> vendredi école</span>.
        </h5>
      </div>
      <div className="mt-4">
        <Row>
          <Col className="me_img my-4" xs={12} sm={12} md={5} lg={5}>
            <Image src={pp} fluid alt="Photo de Romane Boireau" />
          </Col>
          <Col className="description my-3 " xs={12} sm={12} md={7} lg={7}>
            <p>
              Bonjour, moi c’est <span id="ada">Romane</span> ! J’ai 23 ans, je suis originaire de La
              Rochelle mais Nantaise depuis un peu plus d’un an. Je viens de
              finir la première partie de ma formation de développeuse et
              conceptrice d’application à{" "}
              <span id="ada">Ada Tech School Nantes</span>.<br></br>
              Je suis désormais à la recherche d’une alternance de 12 mois dans
              le développement Front ou Full Stack.
            </p>
            <p>
              En 9 mois de formation, j'ai participé à <span id="ada">7 projets d'école</span> et lancé <span id="ada">3 projets perso</span>, vous pouvez
              retrouver ceux sur lesquels j'ai le plus aimé travailler{" "}
              <a href="/projects">
                <span id="link">ici</span>
              </a>. Le reste de mes projets et accessible sur <a href="https://github.com/aanatema"><span id="link" >github</span></a>.{" "}
              <br></br>
              Vous pouvez me contacter via ce{" "}
              <a href="/contact">
                <span id="link">formulaire</span>
              </a>{" "}
              ou grâce aux informations présentes sur mon CV.
            </p>
            <Button
              className="me-4 mb-4 mt-2"
              href="https://drive.google.com/file/d/1TlAS29rITy7vED9qf4F7MxVS0rXzEIcy/view?usp=sharing"
              target="_blank"
              variant="outline-warning"
            >
              {" "}
              VOIR MON CV
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Description;
