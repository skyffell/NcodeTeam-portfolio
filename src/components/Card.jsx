import styles from "./Card.module.scss";

function Card(props) {
    const { version, title, text, skills = [], iconsClass } = props;

    // Карточка этапа в секции AboutTeam
    if (version === "step") {
        return (
            <div className={styles.processStep}>
                <div className={styles.stepIcon}>
                    <i className={`fas ${iconsClass}`}></i>
                </div>
                <h3>{title}</h3>
                {text && <p>{text}</p>}
                {skills.length > 0 && (
                    <div className={styles.stepTech}>
                        {skills.map((skill, index) => (
                            <span key={skill || index}>{skill}</span>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    // Карточка разработчика в секции Hero
    const isFrontend = version === "frontend" || version === "frontend-dev";
    const isBackend = version === "backend" || version === "backend-dev";
    const modifierClass = isFrontend ? styles.frontendDev : isBackend ? styles.backendDev : "";

    return (
        <div className={`${styles.devCard} ${modifierClass}`.trim()}>
            <div className={styles.devAvatar}>
                <i className={`fas ${iconsClass}`}></i>
            </div>
            <h3>{title}</h3>
            {text && <p>{text}</p>}
            <div className={styles.devSkills}>
                {skills.map((skill, index) => (
                    <span key={skill || index} className={styles.skillTag}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Card;
