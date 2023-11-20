import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

function WipCard() {

 //for closing the WipCard disclaimer
 const [show, setShow] = useState(true);

  return (
    <Alert variant="info" onClose={() => setShow(false)} dismissible style ={{width:"50em", marginLeft:"25%", marginTop:"7%"}} >
      <Alert.Heading>Bonjour et bienvenue sur mon portfolio !</Alert.Heading>
      <p>
        Ce site est en cours de réalisation. 
        <br></br> 
        Je suis au tout début de ce projet alors n'hésitez pas à repasser plus tard pour voir mes avancées ! 
      </p>
      <hr />
      <p className="mb-0">
        Je vous souhaite une belle journée :)
      </p>
      </Alert>
  );
}

export default WipCard;