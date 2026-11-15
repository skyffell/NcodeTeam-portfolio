import TechList from "./TechList";
import styles from "./StackCard.module.scss";

const StackCard = (props) => {
    const { version, iconsClass, title, items } = props;
    const titleModifier = version === "frontend" ? styles.frontendTitle : version === "backend" ? styles.backendTitle : "";

    return (
        <div className={styles.stackCategory}>
            <h3 className={`${styles.categoryTitle} ${titleModifier}`.trim()}>
                <i className={iconsClass}></i>
                {title}
            </h3>
            <TechList items={items} />
        </div>
    );
};

export default StackCard;
