// Кнопки ссылок на социальные сети
import { motion } from "framer-motion";
import Button from "@components/Button";
import styles from "./LinkList.module.scss";

const defaultLinks = [
    { iconClass: "fab fa-github", url: "#" },
    { iconClass: "fab fa-telegram", url: "#" },
    { iconClass: "fab fa-linkedin", url: "#" }
];

const LinkList = (props) => {
    const { links = defaultLinks } = props;

    return (
        <div className={styles.socialLinks}>
            {links.map((link, index) => (
                <motion.div
                    key={link.iconClass || index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        as="a"
                        href={link.url}
                        variant="clean"
                        className={styles.socialBtn}
                    >
                        <i className={link.iconClass}></i>
                    </Button>
                </motion.div>
            ))}
        </div>
    );
};

export default LinkList;
