import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

  function Cards(){
    //tableau d'objects contenant les informations sur les différents projets
    const cardData = [
            { title: "PICO RESTO", content: "Jeu rétro Pico-8 codé en LUA",link:"projects/pico_resto",img :require('../Images/pico_resto_start_screen.jpg')},
            { title: "CONSONEA", content: "Création d'un site de vente de meuble avec création d'une API et BDD", link:"/projects/consonea", img:require('../Images/consonea_accueil1.png'), img2:require('../Images/consonea_mise_en_vente.png')},
            { title: "CHOOSE YOUR CAREER", content: "Projet de visualisation de données basé sur l'API de Pôle Emploi", link:"/projects/choose_your_career", img :require('../Images/cyc_result_44.png')},
            
            { title: "SECRET SANTA", content: "Site permettant de tirer au sort les secret santa pour un évenement.", status: "En cours", link:"/projects/secret_santa", img :require('../Images/Le_Chevalier_aux_Fleurs_1894_Georges_Rochegrosse_1859_1938.jpg')},
            ];
          
    const cardStyle ={
        margin:"1rem",
        padding:".25rem",
    }

    const imgStyle1 = {
      // padding : "0.25em", 
      borderRadiusTop:"0.50em",
    }
   
        return(
        
          <Row xs={1} md={2} lg={3} className="mx-4 my-4" >
            {/* cardData.map itère sur le tableau pour créer les cards et integrer les informations du tableau*/}
            {/* idx est pour l'index */}
            {cardData.map((card, idx) => (
              <Col key={idx}>
                <Card style={cardStyle}>
                  <Card.Img style={imgStyle1} variant="top" src={card.img}/>
                  <Card.Body>
                    <Card.Title><strong>{card.title}</strong></Card.Title><h4><Badge bg="secondary">{card.status}</Badge></h4>
                    <Card.Text>{card.content}</Card.Text>
                    <Button href={card.link} variant="dark">En savoir plus</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
    )
  }

export default Cards;