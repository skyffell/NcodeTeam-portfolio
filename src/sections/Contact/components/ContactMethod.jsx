// Отдельный способ связи (email, телефон, телеграм)
import styles from "./ContactMethods.module.scss";

const ContactMethod = ({ iconsClass, title }) => {
    return (
        <div className={styles.contactMethod}>
            <i className={iconsClass}></i>
            <span>{title}</span>
        </div>
    );
};

export default ContactMethod;
