// import Nav from 'react-bootstrap/Nav';

// function ProjectsNavbar() {


//  return (
//     // problems : the tab doesn't stay activ when we click on it because it redirect to the page of the project in question 
//     // how do i fix the active tab ? 
//     <Nav variant="tabs" bg="light" data-bs-theme="dark" defaultActiveKey="/projects"
//     className="mt-5 mx-5" style={{padding:"0"}}>
//         <Nav.Item>
//         <Nav.Link eventKey="0" active>Tous les projets</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         {/* the tab stays active but doesn't redirect towards the page project (no href)*/}
//         <Nav.Link eventKey="/projects/consonea">Consonéa</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link href="/projects/choose_your_career" eventKey="2">Choose your career</Nav.Link>
//       </Nav.Item>
//        <Nav.Item>
//         <Nav.Link href="/projects/secret_santa" eventKey="3">Secret Santa</Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// }

// export default ProjectsNavbar;

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Nav from 'react-bootstrap/Nav';
// import Cards from "../Components/ProjectsCards"

// function ProjectsNavbar() {
//   return (
//     <Card bg="dark" data-bs-theme="dark" className="mt-5 mx-5">
//       <Card.Header>
//         <Nav variant="tabs">
//           <Nav.Item>
//             <Nav.Link activeKey="/projects">TOUS LES PROJETS</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link activeKey="/projects/consonea" href="/projects/consonea">Consonéa</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link href="/projects/choose_your_career">Choose your career</Nav.Link>
//           </Nav.Item>
//            <Nav.Item>
//             <Nav.Link href="/projects/secret_santa">Secret Santa</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link href="#link">Pico Resto</Nav.Link>
//           </Nav.Item>
//         </Nav>
//       </Card.Header>
//       <Card.Body>
//         <Card.Title></Card.Title>
//         <Card.Text bg="light" data-bs-theme="light">
//         <Cards />
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default ProjectsNavbar;

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Cards from "../Components/ProjectsCards"
import Consonea from "../Components/Consonea"
import ChooseYourCareer from "../Components/ChooseYourCareer"
import SecretSanta from "../Components/SecretSanta"
import Pico from "./PicoResto.js"

function ProjectNavbar() {
  return (
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mx-5 mt-5" bg="dark" data-bs-theme="dark">

      <Tab eventKey="home" title="Tous les projets">
      <Cards />
      </Tab>
      <Tab eventKey="consonea" title="Consonéa">
        <Consonea />
      </Tab>
      <Tab eventKey="choose" title="Choose your career" >
        <ChooseYourCareer />
      </Tab>
      <Tab eventKey="secret" title="Secret Santa" >
        <SecretSanta />
      </Tab>
      <Tab eventKey="pico" title="Pico Resto" >
       <Pico />
      </Tab>
    </Tabs>
  );
}

export default ProjectNavbar;