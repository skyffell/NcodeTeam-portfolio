// Секция витрины проектов с динамической фильтрацией и пружинными анимациями
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionsHeader from "@components/SectionsHeader";
import ProjectCard from "./components/ProjectCard";
import ProjectFilters from "./components/ProjectFilters";
import { projectsData, projectFilters } from "@data";
import styles from "./Projects.module.scss";

function Projects({
    projects = projectsData,
    filters = projectFilters
}) {
    const [activeFilter, setActiveFilter] = useState("Все проекты");

    // Фильтрация проектов по выбранной категории
    const filteredProjects = useMemo(() => {
        if (!activeFilter || activeFilter === "Все проекты") {
            return projects;
        }
        return projects.filter(
            (project) => project.category?.toLowerCase() === activeFilter.toLowerCase()
        );
    }, [projects, activeFilter]);

    return (
        <section className={styles.projects} id="projects">
            <div className="container">
                <SectionsHeader mainText="Наши проекты" />

                <ProjectFilters
                    filters={filters}
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                />

                <motion.div layout className={styles.projectGrid}>
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.85, y: 20 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 15
                                }}
                                whileHover={{
                                    y: -12,
                                    scale: 1.02,
                                    transition: { duration: 0.25 }
                                }}
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;
