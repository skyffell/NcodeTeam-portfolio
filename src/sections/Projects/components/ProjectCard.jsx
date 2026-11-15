// Карточка проекта со сводкой информации, превью и ссылками
import Contribution from "./Contribution";
import ProjectPreview from "./ProjectPreview";
import TechUsed from "./TechUsed";
import ProjectLinks from "./ProjectLinks";
import styles from "./ProjectCard.module.scss";

const defaultContribution = [
    { version: "frontend", title: "Frontend: Алексей", iconClass: "fas fa-palette" },
    { version: "backend", title: "Backend: Никита", iconClass: "fas fa-server" }
];

const defaultLinks = [
    { title: "Демо", iconClass: "fas fa-external-link-alt", url: "#" },
    { title: "Код", iconClass: "fab fa-github", url: "#" }
];

const ProjectCard = (props) => {
    const {
        title = "CRM Система",
        description = "Полнофункциональная система управления клиентами с аналитикой",
        category = "fullstack",
        preview,
        technologies,
        tags = ["Flask", "JavaScript", "SQLite"],
        contribution = defaultContribution,
        links = defaultLinks
    } = props;

    return (
        <div className={styles.projectCard} data-category={category}>
            <ProjectPreview {...preview} />

            <div className={styles.projectInfo}>
                <h3>{title}</h3>
                <p>{description}</p>

                <TechUsed titles={technologies || tags} />

                <Contribution contribution={contribution} />

                <ProjectLinks items={links} />
            </div>
        </div>
    );
};

export default ProjectCard;
