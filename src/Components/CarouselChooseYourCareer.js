import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import cyc_acceuil from "../Images/cyc_accueil.jpg";
import cyc_result_44 from "../Images/cyc_result_44.png";
import cyc_result_93 from "../Images/cyc_result_93.png";
import cyc_result_17_option from "../Images/cyc_result_17_option.png";

function CYCCarousel() {
  return (
    // sets the color theme of the carousel + stop the slides from going forward on their own
    <Carousel  data-bs-theme="dark" slide={false} interval={null}>
       <Carousel.Item>
        <Image src={cyc_acceuil} alt="Page d'accueil" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={cyc_result_93} alt="Résultats de la recherche pour le département de la Seine Saint-Denis (93)" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={cyc_result_17_option} alt="Résultats de la recherche pour le département de la Charente-Maritime (17), certaines catégories de résultats sont décochées" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={cyc_result_44} alt="Résultats de la recherche pour le département de la Loire-Atlantique (44)" fluid />
      </Carousel.Item>
    </Carousel>
  );
}

export default CYCCarousel;
