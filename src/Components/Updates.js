import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function UpdatesList() {
  return (
    <>
      <Container className="my-5 ">
        <div>
          <h1 className="project_title mb-3">Dernières nouveautés</h1>
          <p className="project_subtitle" style={{ fontSize: "1.10rem" }}>
            Les changements sont affichés du plus récent au plus ancien sur une
            periode de 2 semaines.
          </p>
        </div>

        <div className="mt-5">
          <h2>22/01</h2>
          <div className="mt-3 project_subtitle" style={{ fontSize: "1.15rem" }}>
            <p>
              Ajout des badges "technos" sur les cards de la page projets.
              <br></br>
              Ajout de la bannière "updates" renvoyant sur cette page.
              <br></br>
              Création de la route et de la page Updates.
              <br></br>
            </p>
          </div>
          
        </div>
      </Container>
    </>
  );
}

export default UpdatesList;
