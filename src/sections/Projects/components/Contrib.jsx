// Элемент вклада участника команды в проект
import styles from "./Contribution.module.scss";

const Contrib = (props) => {
    const { version, iconClass, title } = props;
    const versionClass = version === "frontend" ? styles.frontend : version === "backend" ? styles.backend : "";

    return (
        <div className={`${styles.contribItem} ${versionClass}`.trim()}>
            <i className={iconClass}></i>
            <span>{title}</span>
        </div>
    );
};

export default Contrib;
