import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import pico_resto_start_screen from "../Images/pico_resto_start_screen.jpg";
import pico_resto_endgame  from "../Images/pico_resto_endgame.jpg";
import pico_resto_in_game from "../Images/pico_resto_in_game.jpg";


function PRCarousel() {
  return (
    <Carousel  data-bs-theme="light" slide={false} interval={null}>
       <Carousel.Item>
        <Image src={pico_resto_start_screen} alt="Ecran start du jeu" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={pico_resto_in_game} alt="Image en jeu" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={pico_resto_endgame} alt="Ecran de fin du jeu" fluid />
      </Carousel.Item>
    </Carousel>
  );
}

export default PRCarousel;
