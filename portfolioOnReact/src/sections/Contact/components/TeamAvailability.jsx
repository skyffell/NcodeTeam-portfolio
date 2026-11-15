// Индикатор текущей доступности команды для новых заказов
import styles from "./TeamAvailability.module.scss";

const TeamAvailability = (props) => {
    const {
        isFree = true,
        freeText = "Свободны для новых проектов",
        busyText = "Заняты, скоро освободимся"
    } = props;

    return (
        <div className={styles.teamAvailability}>
            <div
                className={`${styles.statusIndicator} ${
                    isFree ? styles.available : styles.busy
                }`}
            ></div>
            <span>{isFree ? freeText : busyText}</span>
        </div>
    );
};

export default TeamAvailability;
