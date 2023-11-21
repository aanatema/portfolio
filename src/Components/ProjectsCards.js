import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Le_Chevalier_aux_Fleurs_1894_Georges_Rochegrosse_1859_1938 from '../Images/Le_Chevalier_aux_Fleurs_1894_Georges_Rochegrosse_1859_1938.jpg';

  function Cards(){

    //array with the projects short preview
    const cardData = [
            { title: "Consonea", content: "Création d'un site de vente de meuble avec création d'une API et BDD", link:"/projects/consonea"},
            { title: "Choose your career", content: "Projet de visulalisation de données basé sur l'API de Pôle Emploi", link:"/projects/choose_your_career"},
            { title: "Secret Santa", content: "Site permettant de tirer au sort les secret santa pour un évenement.", status: "En cours", link:"/projects/secret_santa"},
            { title: "Pico Resto", content: "Jeu Pico8 s'inspirant du jeu 'overcooked' codé en LUA",link:"/projects/secret_santa"},

          ];
          
    const cardStyle ={
        margin:"1em",
        padding:".25em",   
    }
    
        return(
        
          <Row xs={1} md={2} lg={3} className="mx-4 mt-4" >
            {/* create an iteration on our array to display the cards with the informations from cardData */}
            {/* idx is for index */}
            {cardData.map((card, idx) => (
              <Col key={idx}>
                <Card style={cardStyle}>
                  <Card.Img style={{padding : "0.25em", borderRadius:"0.50em",}} variant="top" src={Le_Chevalier_aux_Fleurs_1894_Georges_Rochegrosse_1859_1938 }/>
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title><h4><Badge bg="secondary">{card.status}</Badge></h4>
                    <Card.Text>{card.content}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
    )
  }


//     <>
//     <Row>
//     <div ClassName ="mx-5">
//     <Card style={{width: '28em', margin: "3em", padding:"0.50em"}}>
//       <Card.Img variant="top" src={Le_Chevalier_aux_Fleurs_1894_Georges_Rochegrosse_1859_1938} />
//       <Card.Body>
//         <Card.Title>Consonéa</Card.Title>
//         <Card.Text>
//         Création d'un site de vente de meuble.
//         </Card.Text>
//         <Button variant="outline-">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//     <Card style={{width: '28em', margin: "3em", padding:"0.50em"}}>
//     <Card.Img variant="top" src={Le_Chevalier_aux_Fleurs_1894_Georges_Rochegrosse_1859_1938} />
//     <Card.Body>
//     <Card.Title>Choose your career</Card.Title>
//     <Card.Text>
//         Projet de data visualisation basé sur l'API de Pôle Emploi.
//     </Card.Text>
//     <Button variant="dark"></Button>
//     </Card.Body>
//     </Card>

//     <Card style={{width: '28em', margin: "3em", padding:"0.50em"}}>
//     <Card.Img variant="top" src={Le_Chevalier_aux_Fleurs_1894_Georges_Rochegrosse_1859_1938} />
//     <Card.Body>
//     <Card.Title>Secret Santa</Card.Title>
//     <Card.Text>
//         Site permettant de tirer au sorts les secret santa pour un évenement 
//     </Card.Text>
//     <Button variant="dark">Go somewhere</Button>
//     </Card.Body>
//     </Card>
//     </div>
//     </Row>
//     </>
//   );
// }

export default Cards;