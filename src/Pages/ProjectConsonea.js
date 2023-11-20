import NavBar from "../Components/Navbar"
import ProjectsNavbar from "../Components/ProjectsNavbar"

function ProjectConsonea (){
    return (
        <> 
        {/* the <> allows several components to coexist in the same page*/}
        <div>
            <NavBar />
        </div>
        <div><ProjectsNavbar /></div>
        </>
    )
};

export default ProjectConsonea;