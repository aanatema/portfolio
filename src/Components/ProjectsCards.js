import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

function Cards() {
  //tableau d'objects contenant les informations sur les différents projets
  const cardData = [
    {
      title: "PICO RESTO",
      cat: "Projet d'école",
      content: "Jeu rétro Pico-8 codé en LUA. Tout premier projet.",
      link: "projects/pico_resto",
      img: require("../Images/2.png"),
    },
    {
      title: "CONSONEA",
      cat: "Projet d'école",
      content:
        "Création d'un site de vente de meuble avec création d'une API et BDD",
      link: "/projects/consonea",
      img: require("../Images/1.png"),
    },
    {
      title: "CHOOSE YOUR CAREER",
      cat: "Projet d'école",
      content:
        "Projet de visualisation de données basé sur l'API de Pôle Emploi",
      link: "/projects/choose_your_career",
      img: require("../Images/3.png"),
    },

    {
      title: "KIND GLYPHS",
      content: "Extension navigateur permettant de censurer certains mots",
      cat: "Projet personnel",
      status: "En cours",
      link: "/projects/kind_glyphs",
      img: require("../Images/4.png"),
    },
    {
      title: "PORTFOLIO",
      content: "Portfolio ayant pour but de me familiariser avec React",
      cat: "Projet personnel",
      status: "En cours",
      link: "/projects/portfolio",
      img: require("../Images/5.png"),
    },
  ];

  const cardStyle = {
    margin: "1rem",
    padding: ".25rem",
  };

  const imgStyle1 = {
    // padding : "0.25em",
    borderRadiusTop: "0.50em",
  };

  return (
    <Row xs={1} md={2} lg={3} className="mx-4 my-4">
      {/* cardData.map itère sur le tableau pour créer les cards et integrer les informations du tableau*/}
      {/* idx est pour l'index */}
      {cardData.map((card, idx) => (
        <Col key={idx}>
          <Card className="card_style my-4 mx-2">
            <Card.Img className="card_img " variant="top" src={card.img} />
            <Card.Body>
              <Stack className="mb-4" direction="horizontal" gap={2}>
                <Badge bg="secondary" style={{ fontSize: "1rem" }}>
                  {card.cat}
                </Badge>
                <Badge bg="warning" style={{ fontSize: "1rem" }}>
                  {card.status}
                </Badge>
              </Stack>
              <Card.Title>
                <strong>{card.title}</strong>
              </Card.Title>

              <Card.Text>{card.content}</Card.Text>
              <Button className="button" href={card.link}>
                En savoir plus
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cards;
