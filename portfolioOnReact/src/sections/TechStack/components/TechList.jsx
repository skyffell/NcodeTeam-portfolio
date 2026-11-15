import TechItem from "./TechItem";
import styles from "./TechList.module.scss";

const TechList = (props) => {
    const { items = [] } = props;
    return (
        <div className={styles.techItems}>
            {items.map((item) => (
                <TechItem key={item.id} {...item} />
            ))}
        </div>
    );
};

export default TechList;
