// Секция преимуществ команды N-code с выразительными пружинными анимациями сравнения
import { motion } from "framer-motion";
import SectionsHeader from "@components/SectionsHeader";
import StatsGrid from "./components/StatsGrid";
import TypingDemo from "./components/TypingDemo";
import WhyUsCard from "./components/WhyUsCard";
import Ellipse from "@components/Ellipse";
import { comparisonData, statsData } from "@data";
import styles from "./WhyUs.module.scss";

function WhyUs() {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

    return (
        <section className={styles.whyUs} id="why">
            <div className="container">
                <SectionsHeader mainText="Почему N-code Team?" />

                <div className={styles.comparison}>
                    {/* Карточка одного разработчика */}
                    <motion.div
                        style={{ flex: 1, minWidth: "min(300px, 100%)", width: "100%", display: "flex" }}
                        initial={{ opacity: 0, x: isMobile ? 0 : -70, y: isMobile ? 30 : 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            type: "spring",
                            stiffness: 90,
                            damping: 13
                        }}
                        whileHover={{
                            y: -10,
                            scale: 1.02,
                            transition: { duration: 0.25 }
                        }}
                    >
                        <WhyUsCard
                            version={comparisonData.solo.version}
                            title={comparisonData.solo.title}
                            texts={comparisonData.solo.texts}
                        />
                    </motion.div>

                    {/* Разделитель VS с анимацией вращения и увеличения */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.3, rotate: -45 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 130,
                            damping: 11,
                            delay: 0.2
                        }}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                        <Ellipse title="VS" version="vs-circle" />
                    </motion.div>

                    {/* Карточка команды N-code Team */}
                    <motion.div
                        style={{ flex: 1, minWidth: "min(300px, 100%)", width: "100%", display: "flex" }}
                        initial={{ opacity: 0, x: isMobile ? 0 : 70, y: isMobile ? 30 : 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            type: "spring",
                            stiffness: 90,
                            damping: 13,
                            delay: 0.15
                        }}
                        whileHover={{
                            y: -10,
                            scale: 1.02,
                            transition: { duration: 0.25 }
                        }}
                    >
                        <WhyUsCard
                            version={comparisonData.team.version}
                            title={comparisonData.team.title}
                            texts={comparisonData.team.texts}
                        />
                    </motion.div>
                </div>

                <StatsGrid items={statsData} />
            </div>

            <TypingDemo />
        </section>
    );
}

export default WhyUs;
