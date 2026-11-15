// Фирменный логотип N-CODE
import styles from "./NCodeLogo.module.scss";

const NCodeLogo = () => {
    return (
        <div className={styles.logo}>
            <span className={styles.nLetter}>N</span>
            <span className={styles.dash}>-</span>
            <span className={styles.codeText}>CODE</span>
        </div>
    );
};

export default NCodeLogo;
