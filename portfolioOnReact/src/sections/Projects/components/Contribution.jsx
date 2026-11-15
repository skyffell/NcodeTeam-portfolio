// Список вклада участников команды в разработку проекта
import Contrib from "./Contrib";
import styles from "./Contribution.module.scss";

const Contribution = (props) => {
    const { contribution = [] } = props;
    return (
        <div className={styles.contribution}>
            {contribution.map((item, index) => (
                <Contrib
                    key={index}
                    iconClass={item.iconClass}
                    version={item.version}
                    title={item.title}
                />
            ))}
        </div>
    );
};

export default Contribution;
