import Nav from 'react-bootstrap/Nav';

function ProjectsNavbar() {


 return (
    // problems : the tab doesn't stay activ when we click on it because it redirect to the page of the project in question 
    // how do i fix the active tab ? 
    <Nav variant="tabs" data-bs-theme="dark" defaultActiveKey="/projects"
    className="mt-5 mx-5">
        <Nav.Item>
        <Nav.Link href="/projects" eventKey="0">Tous les projets</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        {/* the tab stays active but doesn't redirect towards the page project (no href)*/}
        <Nav.Link eventKey="/projects/consonea">Consonéa</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/projects/choose_your_career" eventKey="2">Choose your career</Nav.Link>
      </Nav.Item>
       <Nav.Item>
        <Nav.Link href="/projects/secret_santa" eventKey="3">Secret Santa</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default ProjectsNavbar;