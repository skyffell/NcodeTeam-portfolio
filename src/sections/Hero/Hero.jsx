// Главная секция Hero с бинарным интерактивным фоном и выразительными анимациями
import { motion } from "framer-motion";
import Arrow from "@components/Arrow";
import Button from "@components/Button";
import Card from "@components/Card";
import Ellipse from "@components/Ellipse";
import SectionsHeader from "@components/SectionsHeader";
import BinaryBackground from "@components/BinaryBackground/BinaryBackground";
import styles from "./Hero.module.scss";

function Hero() {
    return (
        <section className={styles.hero} id="home">
            {/* Анимированный бинарный цифровой фон */}
            <BinaryBackground />

            <div className="container">
                <div className={styles.teamPresentation}>
                    <SectionsHeader
                        mainText="N-CODE TEAM"
                        subText="От пикселя до API - создаем цифровые решения под ключ"
                        isHero={true}
                    />

                    <div className={styles.developerCards}>
                        {/* Карточка Frontend разработчика */}
                        <motion.div
                            initial={{ opacity: 0, x: -70, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 90,
                                damping: 13,
                                delay: 0.25
                            }}
                            whileHover={{
                                y: -12,
                                scale: 1.04,
                                transition: { duration: 0.25 }
                            }}
                        >
                            <Card
                                version="frontend"
                                title="Frontend Developer"
                                text="HTML5, CSS3, JavaScript, React"
                                skills={["UI/UX", "Анимации", "Адаптивность"]}
                                iconsClass="fa-palette"
                            />
                        </motion.div>

                        {/* Бейдж Синергии с пульсацией */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.4 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 12,
                                delay: 0.5
                            }}
                            whileHover={{ scale: 1.15 }}
                        >
                            <Ellipse version="synergy" title="Синергия" hasPulse={true} />
                        </motion.div>

                        {/* Карточка Backend разработчика */}
                        <motion.div
                            initial={{ opacity: 0, x: 70, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 90,
                                damping: 13,
                                delay: 0.35
                            }}
                            whileHover={{
                                y: -12,
                                scale: 1.04,
                                transition: { duration: 0.25 }
                            }}
                        >
                            <Card
                                version="backend"
                                title="Backend Developer"
                                text="Python, Flask, FastAPI, SQL"
                                skills={["API", "Базы данных", "Архитектура"]}
                                iconsClass="fa-server"
                            />
                        </motion.div>
                    </div>

                    {/* Главная кнопка действия */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button title="Наши работы" version="hero" />
                    </motion.div>
                </div>

                {/* Плавающий индикатор прокрутки */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                >
                    <Arrow orientation="down" className={styles.scrollIndicator} />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
