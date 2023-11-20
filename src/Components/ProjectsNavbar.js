import Nav from 'react-bootstrap/Nav';

function ProjectsNavbar() {


 return (
    // problems : the tab doesn't stay activ when we click on it because it redirect to the page of the project in question 
    // how do i fix the active tab
    <Nav variant="tabs" data-bs-theme="dark" defaultActiveKey=""
    className="mt-5 ms-5 me-5">
      <Nav.Item>
        <Nav.Link href="/projects/consonea" eventKey="1">Consonéa</Nav.Link>
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