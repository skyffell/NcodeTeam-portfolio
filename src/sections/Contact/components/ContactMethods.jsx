// Список способов связи команды с плавной анимацией
import { motion } from "framer-motion";
import ContactMethod from "./ContacMethod";
import styles from "./ContactMethods.module.scss";

const ContactMethods = (props) => {
    const { items = [] } = props;
    return (
        <div className={styles.contactMethods}>
            {items.map((item, index) => (
                <motion.div
                    key={item.id || item.title || index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                    <ContactMethod
                        iconsClass={item.iconsClass}
                        title={item.title}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default ContactMethods;
