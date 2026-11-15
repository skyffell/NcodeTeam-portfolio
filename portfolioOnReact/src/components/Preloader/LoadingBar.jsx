// Индикатор прогресса загрузки
import styles from "./Preloader.module.scss";

const LoadingBar = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loadingBar}>
                <div className={styles.loadingProgress}></div>
            </div>
            <div className={styles.loadingText}>Загрузка портфолио...</div>
        </div>
    );
};

export default LoadingBar;
