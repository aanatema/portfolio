import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import pp from "../Images/pp.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../index.css";

function Description() {
  return (
    // need to check if i can use better html elements
    <Container className="mt-5" style={{ color: "#cdcfce" }}>

      <div id="intro">
        <h2>
          Développeuse Web Junior en recherche d'une alternance Front ou Full Stack,
          démarrage à partir de 
          <span id="ada"> février 2024</span>.
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
            <Image src={pp} fluid alt="Photo de Romane Boireau"/>
          </Col>
          <Col className="description my-3 " xs={12} sm={12} md={7} lg={7}>
            <p>
              Après 3 ans d'études des{" "}
              <span id="ada">
                langues et des cultures russes, anglaises et italiennes
              </span>, j'ai
              choisi de changer de voie pour quelque chose de plus tangible: le
              code.
              <br></br>
              <br></br>
              J’aime les langues, apprendre les us et coutumes d’autres pays
              est très intéressant, mais on peut difficilement les mettre en
              pratique tous les jours sans se trouver dans le pays d’origine.
              L’avantage des langages informatiques, c’est qu’on peut les
              utiliser quand on veut et en changer quand on le souhaite.
              <br></br>
              <br></br>
              J’ai besoin de voir ma courbe d’apprentissage, me rendre compte de
              ce que j’ai accompli et mettre en pratique ce que j’apprends. Je
              m’y retrouve parfaitement lorsque que je code.<br></br>
              <br></br>
              En formation depuis 7 mois à <span id="ada">Ada Tech School</span>
              , j’ai appris et continue à apprendre à travailler en équipe comme
              en solo, avec des projets permettant d’appliquer la méthodologie
              Agile, de découvrir et d’utiliser les langages et les technos
              présentes en entreprise. <br></br>
              <br></br>
              Au cours de ma formation, j’ai travaillé sur 7 projets différents
              avec des équipes allant de 3 à 9 personnes. Ceux sur lesquels j'ai
              le plus aimé travailler sont rangés{" "}
              <a href="/projects">
                <span id="link">là</span>
              </a>{" "}
              !<br></br>
              <br></br>
              N'hésitez pas à me contacter, mes coordonnées sont{" "}
              <a href="/contact">
                <span id="link">ici</span>
              </a>{" "}
              !
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
