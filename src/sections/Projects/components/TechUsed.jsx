// Список тегов технологий проекта
import styles from "./TechUsed.module.scss";

const TechUsed = (props) => {
    const { titles = [] } = props;
    return (
        <div className={styles.techUsed}>
            {titles.map((title, index) => (
                <span key={title || index} className={styles.techTag}>
                    {title}
                </span>
            ))}
        </div>
    );
};

export default TechUsed;
