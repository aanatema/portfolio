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
        <Image src={consonea_accueil1} alt="Page d'accueil" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={consonea_accueil} alt="Suite de la page d'accueil" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={consonea_inscription_page} alt="Page d'inscription" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={consonea_login_page} alt="Page de connexion" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={consonea_mise_en_vente} alt="Page d'ajout d'un meuble à la vente" fluid />
      </Carousel.Item>
    </Carousel>
  );
}

export default CCarousel;
