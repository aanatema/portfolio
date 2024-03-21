import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function UpdatesList() {
  return (
    <>
    {/* need to improve this part */}
      <Container className="my-5">

        <div>
          <h1 className="project_title mb-3" style={{textDecoration:"underline"}}>Dernières nouveautés</h1>
          <p className="project_subtitle" style={{ fontSize: "1.10rem" }}>
            Les changements sont affichés du plus récent au plus ancien.
          </p>
        </div>

        <div className="mt-5">
          <h2 className="updates_date mt-5">30/01 - Un brin de ménage</h2>
          <div className=" project_subtitle" style={{ fontSize: "1.05rem" }}>
            <p>
              - Analyse de mes composants et redécoupage des éléments qui peuvent l'être afin de créer des composants plus clairs et mieux
              organisés.
              <br></br> - Renommage des composants, toujours dans l'optique
              d'être plus claire.
              <br></br> - Changement de nom des images.
              <br></br>
            </p>
          </div>

          <h2 className="updates_date mt-5">26/01 - Ajout de projet</h2>
          <div className=" project_subtitle" style={{ fontSize: "1.05rem" }}>
            <p>
              - Création de la card projet pour Spots & Potes.
              <br></br>- Recréation des images de couverture des projets et
              création de celle de Spots & Potes.
              <br></br>- Création de la route et de la page menant vers le
              projet.
              <br></br>- Ajout du carousel d'image de Spots & Potes et du lien
              vers le projet sur github.
              <br></br>- L'onglet à propos devient "Patch Notes" et contient
              désormais la page updates.
              <br></br>
            </p>
          </div>

          <h2 className="updates_date mt-5">
            25/01 - Amélioration de l'accessibilité
          </h2>
          <div className=" project_subtitle" style={{ fontSize: "1.05rem" }}>
            <p>
              - Description altérnative des images
              <br></br>- Changement de la couleur des badges "V.1" et "En cours"
              pour un meilleur contraste (écriture blanche sur fond bleu plutôt
              que blanche sur fond jaune)
              <br></br>
            </p>
          </div>

          <h2 className="updates_date mt-5">22/01 - Premiers updates</h2>
          <div
            className="mt-3 project_subtitle"
            style={{ fontSize: "1.05rem" }}
          >
            <p>
              - Ajout des badges "technos" sur les cards de la page projets.
              <br></br>- Ajout de la bannière "updates" renvoyant sur cette
              page.
              <br></br>- Création de la route et de la page Updates.
              <br></br>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default UpdatesList;
