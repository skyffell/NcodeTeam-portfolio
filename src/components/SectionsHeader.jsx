// Заголовок секций с эффектом печатной машинки в Hero и появлением при скролле
import { motion } from "framer-motion";
import TypewriterText from "@components/TypewriterText";
import styles from "./SectionsHeader.module.scss";

function SectionsHeader(props) {
  const { mainText, subText, isHero } = props;

  // Если это секция Hero, выводим крупный заголовок и анимированный печатающийся текст
  if (isHero) {
    return (
      <>
        <motion.div
          className={styles.heroNameContainer}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className={styles.heroName}>{mainText}</h1>
        </motion.div>
        {subText && (
          <p className={styles.heroTagline}>
            <TypewriterText text={subText} speed={30} delay={450} cursor={true} />
          </p>
        )}
      </>
    );
  }

  // Для остальных секций — появление при попадании во viewport
  return (
    <motion.div
      className={styles.header}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className={styles.title}>{mainText}</h2>
      {subText && <p className={styles.subtitle}>{subText}</p>}
    </motion.div>
  );
}

export default SectionsHeader;
