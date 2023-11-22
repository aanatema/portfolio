

import Carousel from 'react-bootstrap/Carousel';
import cyc_accueil from '../Images/cyc_accueil.png';
import cyc_result_44 from '../Images/cyc_result_44.png';
import cyc_result_93 from '../Images/cyc_result_93.png';
import cyc_result_17_option from '../Images/cyc_result_17_option.png';
import cyc_maj_data from '../Images/cyc_maj_data.png';

function ChooseYourCareer(){

    return(
        <Carousel className="mt-5 mx-5"  >
        <Carousel.Item>
          <img className="img-fluid" src={cyc_accueil}/>
          <Carousel.Caption>
            <p>Page d'accueil du site</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img  src={cyc_result_44}/>
          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img  src={cyc_result_93}/>
          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img  src={cyc_result_17_option}/>
          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img  src={cyc_maj_data}/>
          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default ChooseYourCareer;