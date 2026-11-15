// Ссылки на демонстрацию и исходный код проекта
import Button from "@components/Button";
import styles from "./ProjectLinks.module.scss";

const ProjectLinks = (props) => {
    const { items = [] } = props;
    return (
        <div className={styles.projectLinks}>
            {items.map(({ title, iconClass, url }, index) => (
                <Button
                    key={url || title || index}
                    as="a"
                    href={url}
                    variant="project-link"
                    className={styles.projectLink}
                >
                    <i className={iconClass}></i>
                    <span>{title}</span>
                </Button>
            ))}
        </div>
    );
};

export default ProjectLinks;
