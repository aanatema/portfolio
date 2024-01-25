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
          <h2 className="updates_date">22/01 - Premiers updates</h2>
          <div className="mt-3 project_subtitle" style={{ fontSize: "1.05rem" }}>
            <p>
              - Ajout des badges "technos" sur les cards de la page projets.
              <br></br>
              - Ajout de la bannière "updates" renvoyant sur cette page.
              <br></br>
              - Création de la route et de la page Updates.
              <br></br>
            </p>
          </div>

          <h2 className="updates_date mt-5" >25/01 - Amélioration de l'accessibilité</h2>
          <div className=" project_subtitle" style={{ fontSize: "1.05rem" }}>
            <p>
              - Description altérnative des images 
              <br></br>
              - Changement de la couleur des badges "V.1" et "En cours" pour un meilleur contraste (écriture blanche sur fond bleu plutôt que blanche sur fond jaune)
              <br></br>
            </p>

            <h2 className="updates_date mt-5" >26/01 - Ajout de projet</h2>
          <div className=" project_subtitle" style={{ fontSize: "1.05rem" }}>
            <p>
              - Création de la card projet pour Spots & Potes.
              <br></br>
              - Création de l'image de couverture pour le projet.
              <br></br>
              - Création de la route et de la page menant vers le projet.
              <br></br>
            </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default UpdatesList;
