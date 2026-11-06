import SectionsHeader from "../../components/SectionsHeader";
import ProjectCard from "./components/ProjectCard";
import ProjectFilters from "./components/ProjectFilters";
import { projectsData, projectFilters } from "../../data";

function Projects({
    projects = projectsData,
    filters = projectFilters
}) {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <SectionsHeader mainText="Наши проекты" />

                <ProjectFilters filters={filters} />

                <div className="project-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
