import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import pico_resto_start_screen from "../Images/pico_resto_start_screen.jpg";
import pico_resto_endgame  from "../Images/pico_resto_endgame.jpg";
import pico_resto_in_game from "../Images/pico_resto_in_game.jpg";


function PRCarousel() {
  return (
    <Carousel  data-bs-theme="light" slide={false} interval={null}>
       <Carousel.Item>
        <Image src={pico_resto_start_screen} alt="Résultats de la recherche pour le département de la Seine Saint-Denis (93)" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={pico_resto_in_game} alt="Résultats de la recherche pour le département de la Seine Saint-Denis (93)" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={pico_resto_endgame} alt="Résultats de la recherche pour le département de la Seine Saint-Denis (93)" fluid />
      </Carousel.Item>
    </Carousel>
  );
}

export default PRCarousel;
