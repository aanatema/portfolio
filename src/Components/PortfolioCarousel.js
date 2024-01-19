import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import portfolio1 from "../Images/portfolio1.png";
import portfolio2 from "../Images/portfolio2.png";
import portfolio4 from "../Images/portfolio4.png";
import portfolio5 from "../Images/portfolio5.png";

function PortfolioCarousel() {
  return (
    <Carousel data-bs-theme="light" slide={false} interval={null}>
      <Carousel.Item>
        <Image
          src={portfolio1}
          alt="Résultats de la recherche pour le département de la Seine Saint-Denis (93)"
          fluid
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={portfolio2}
          alt="Résultats de la recherche pour le département de la Seine Saint-Denis (93)"
          fluid
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={portfolio4}
          alt="Résultats de la recherche pour le département de la Seine Saint-Denis (93)"
          fluid
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={portfolio5}
          alt="Résultats de la recherche pour le département de la Seine Saint-Denis (93)"
          fluid
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default PortfolioCarousel;
