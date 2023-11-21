//this page will contain the projectImg component, the 

import Carousel from 'react-bootstrap/Carousel';
import an_allegory_of_victory from '../Images/an_allegory_of_victory.jpg';

function Consonea(){

    return(
        <Carousel className="mt-5 mx-5" style={{width:"40em"}}>
        <Carousel.Item>
          <img  src={an_allegory_of_victory}/>
          <Carousel.Caption>
            <p>Page d'accueil du site</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img  src={an_allegory_of_victory}/>
          <Carousel.Caption>
            <p>Page de connexion et d'inscription</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img  src={an_allegory_of_victory}/>
          <Carousel.Caption>
            <p>Page vente de meuble</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img  src={an_allegory_of_victory}/>
          <Carousel.Caption>
            <p>Page gestion des meubles en vente par l'admin</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default Consonea;