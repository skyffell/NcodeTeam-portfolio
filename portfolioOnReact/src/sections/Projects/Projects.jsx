import SectionsHeader from "../../components/SectionsHeader"
import ProjectCard from "./components/ProjectCard"
import ProjectFilters from "./components/ProjectFilters"

function Projects() {
    return(
        <section className="projects" id="projects">
        <div className="container">
            <SectionsHeader mainText = "Наши проекты"/>
            
            <ProjectFilters filters = {['Все проекты','Fullstack','Frontend','Backend']}/>
            
            <div className="project-grid">
                
                <ProjectCard />
                
                <ProjectCard />

            </div>
        </div>
    </section>
    )
}
export default Projects