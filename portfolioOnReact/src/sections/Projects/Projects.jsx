import SectoinsHeader from "../../components/SectionsHeader"
import ProjectCard from "./components/ProjectCard"
import ProjectFilters from "./ProjectFilters"

function Projects() {
    return(
        <section class="projects" id="projects">
        <div class="container">
            <SectoinsHeader mainText = "Наши проекты"/>
            
            <ProjectFilters filters = {['Все проекты','Fullstack','Frontend','Backend']}/>
            
            <div class="project-grid">
                
                <ProjectCard />
                
                <ProjectCard />

            </div>
        </div>
    </section>
    )
}
export default Projects