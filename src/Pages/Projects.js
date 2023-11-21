//this page is for all projects. It will contain the second navbar "ProjectNavbar" to help navigate between the diffrent projects

import NavBar from "../Components/Navbar";
import ProjectsNavbar from "../Components/ProjectsNavbar"

function Projects (){
    return (
        <> 
        {/* the <> allows several components to coexist in the same page*/}
        <NavBar />
        <ProjectsNavbar />
        
        </>
    )
};

export default Projects;