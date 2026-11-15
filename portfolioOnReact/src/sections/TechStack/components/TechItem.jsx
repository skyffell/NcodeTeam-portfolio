// Элемент отдельного технологического навыка с анимированным заполнением шкалы
import { motion } from "framer-motion";
import styles from "./TechItem.module.scss";

const TechItem = (props) => {
    const { title, iconsClass, level, dataTech } = props;
    return (
        <motion.div
            className={styles.techItem}
            data-tech={dataTech}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <div className={styles.techIcon}>
                <i className={iconsClass}></i>
            </div>
            <span>{title}</span>
            <div className={styles.techProgress}>
                <motion.div
                    className={styles.progressBar}
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
                    data-level={`${level}%`}
                ></motion.div>
            </div>
        </motion.div>
    );
};

export default TechItem;
