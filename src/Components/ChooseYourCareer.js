

import Carousel from 'react-bootstrap/Carousel';
import an_allegory_of_victory from '../Images/an_allegory_of_victory.jpg';

function ChooseYourCareer(){

    return(
        <Carousel className="mt-5 mx-5" style={{width:"40em"}}>
        <Carousel.Item>
          <img  src={an_allegory_of_victory}/>
          <Carousel.Caption>
            <p>Page d'accueil du site</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img  src={an_allegory_of_victory}/>
          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img  src={an_allegory_of_victory}/>
          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img  src={an_allegory_of_victory}/>
          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default ChooseYourCareer;