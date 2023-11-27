//this page is for all projects. It will contain the second navbar "ProjectNavbar" to help navigate between the diffrent projects

import NavBar from "../Components/Navbar";
import Cards from "../Components/ProjectsCards";


function Projects (){
    return (
        <> 
        {/* the <> allows several components to coexist in the same page*/}
        <NavBar />
        <Cards />
        
        </>
    )
};

export default Projects;