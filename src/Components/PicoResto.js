import Carousel from 'react-bootstrap/Carousel';
import an_allegory_of_victory from '../Images/an_allegory_of_victory.jpg';

function Pico(){

    return(
        <Carousel className="mt-5 mx-5" style={{width:"40em"}}>
        <Carousel.Item>
          <img  src={an_allegory_of_victory}/>
          <Carousel.Caption>
            <p>Ecran start du jeu avec séléction du personnage à jouer</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img  src={an_allegory_of_victory}/>
          <Carousel.Caption>
            <p>En jeu</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default Pico;