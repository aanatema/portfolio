import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import page_accueil from "../Images/page_accueil.png";
import page_spots_favoris  from "../Images/page_spots_favoris.png";
import page_ajout_spot from "../Images/page_ajout_spot.png";


function SpotsAndPotesCarousel() {
  return (
    <Carousel  data-bs-theme="dark" slide={false} interval={null}>
       <Carousel.Item>
        <Image src={page_accueil} alt="page d'accueil de l'application" fluid/>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={page_spots_favoris} alt="Page des spots favoris" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={page_ajout_spot} alt="Page d'ajout d'un spot" fluid />
      </Carousel.Item>
    </Carousel>
  );
}

export default SpotsAndPotesCarousel;