import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import consonea_accueil from "../Images/consonea_accueil.png";
import consonea_accueil1 from "../Images/consonea_accueil1.png";
import consonea_inscription_page from "../Images/consonea_inscription_page.png";
import consonea_login_page from "../Images/consonea_login_page.png";
import consonea_mise_en_vente from "../Images/consonea_mise_en_vente.png";

function CCarousel() {
  return (
    <Carousel data-bs-theme="dark" slide={false} interval={null}>
       <Carousel.Item>
        <Image src={consonea_accueil1} alt="Résultats de la recherche pour le département de la Seine Saint-Denis (93)" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={consonea_accueil} alt="Résultats de la recherche pour le département de la Seine Saint-Denis (93)" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={consonea_inscription_page} alt="Résultats de la recherche pour le département de la Seine Saint-Denis (93)" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={consonea_login_page} alt="Résultats de la recherche pour le département de la Charente-Maritime (17), certaines catégories de résultats sont décochées" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={consonea_mise_en_vente} alt="Résultats de la recherche pour le département de la Loire-Atlantique (44)" fluid />
      </Carousel.Item>
    </Carousel>
  );
}

export default CCarousel;
