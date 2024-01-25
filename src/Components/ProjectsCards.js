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
      title: "PORTFOLIO",
      content: "Portfolio ayant pour but d'approfondir ce que j'ai découvert avec React lors du projet Consonea.",
      cat: "PROJET PERSONNEL",
      status: "V.1",
      technos:"React.js / Bootstrap ",
      technos2:"EmailJS",
      link: "/projects/portfolio",
      img: require("../Images/cover_portfolio.png"),
    },
    {
      title: "CONSONEA",
      cat: "PROJET D'ECOLE",
      technos:"React / Bootstrap / Express ",
      technos2:" MySQL / Node.js",
      content:
        "Création d'un site de vente de meuble avec création d'une API et BDD.",
      link: "/projects/consonea",
      img: require("../Images/cover_consonea.png"),
    },
    {
      title: "SPOTS & POTES",
      cat: "PROJET D'ECOLE",
      technos:" Android Studio / Kotlin / Gradle",
      technos2:" Go / MySQL / RetroFit ",
      content:
        "App mobile Android répertoriant les meilleurs spots de surf.",
      link: "/projects/spots_and_potes",
      img: require("../Images/cover_spots_and_potes.png"),
    },
    {
      title: "CHOOSE YOUR CAREER",
      cat: "PROJET D'ECOLE",
      technos:" JavaScript / CSS / HTML ",
      technos2:" ChartJS / API Pôle Emploi",
      content:
        "Projet de visualisation de données basé sur l'API de Pôle Emploi",
      link: "/projects/choose_your_career",
      img: require("../Images/cover_choose_your_career.png"),
    },
    {
      title: "KIND GLYPHS",
      content: "Extension navigateur qui censure les mots choisis pour une navigation plus agréable.",
      cat: "PROJET PERSONNEL",
      technos:"JavaScript / HTML / CSS",
      status: "En cours",
      link: "/projects/kind_glyphs",
      img: require("../Images/cover_kind_glyphs.png"),
    },
    {
      title: "PICO RESTO",
      cat: "PROJET D'ECOLE",
      technos:"LUA",
      content: "Jeu rétro Pico-8 codé en LUA. Tout premier projet de la formation.",
      link: "projects/pico_resto",
      img: require("../Images/cover_pico_resto.png"),
    },
  ];

  return (
    <Row xs={1} md={2} lg={3} className="mx-4 my-4">
      {/* cardData.map itère sur le tableau pour créer les cards et integrer les informations du tableau*/}
      {/* idx est pour l'index */}
      {cardData.map((card, idx) => (
        <Col key={idx}>
          <Card className="card_style my-4 mx-2">
            <Card.Img className="card_img " variant="top" src={card.img} alt="Image illustrant le projet"/>
            <Card.Body > 
              <Stack className="mb-1" direction="horizontal" gap={2}>
                <Badge bg="success" style={{ fontSize: "0.85rem" }}>
                  {card.cat}
                </Badge>
                <Badge bg="primary" style={{ fontSize: "0.85rem" }}>
                  {card.status}
                </Badge>
                
              </Stack>
              <Badge className="mb-1 me-2" bg="danger" style={{ fontSize: "0.85rem" }}>
                  {card.technos}
                </Badge>
                <Badge className="mb-3 " bg="danger" style={{ fontSize: "0.85rem" }}>
                  {card.technos2}
                </Badge>
              <Card.Title>
                <strong>{card.title}</strong>
              </Card.Title>
              <Card.Text>{card.content}</Card.Text>
              <Button className="button" href={card.link}>
                Voir le projet
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cards;
