import ProjectList from "../components/ProjectList";
import { projects } from "../data/projectData";
import Footer from "../components/Footer";

function Projects() {
    return (
        <ProjectList projects={projects} />
    )
}


export default Projects;

