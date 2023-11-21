import Carousel from 'react-bootstrap/Carousel';
import pico_resto_endgame from '../Images/pico_resto_endgame.jpg';
import pico_resto_in_game from '../Images/pico_resto_in_game.jpg';
import pico_resto_start_screen from '../Images/pico_resto_start_screen.jpg';

function Pico(){

    return(
        <Carousel className="my-5 mx-5" style={{width:"40em"}}>
        <Carousel.Item>
          <img  src={pico_resto_start_screen}/>
          <Carousel.Caption className="mt-1">
            <p>Ecran start du jeu avec séléction du personnage à jouer</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img  src={pico_resto_in_game}/>
          <Carousel.Caption>
            <p>En jeu</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img  src={pico_resto_endgame}/>
          <Carousel.Caption>
            <p>Fin du jeu</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default Pico;