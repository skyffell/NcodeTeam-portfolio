// Секция стека технологий команды с выразительными пружинными анимациями
import { motion } from "framer-motion";
import SectionsHeader from "@components/SectionsHeader";
import StackCard from "./components/StackCard";
import { techStackData } from "@data";
import styles from "./TechStack.module.scss";

function TechStack({ categories = techStackData }) {
    return (
        <section className={styles.techStack} id="tech">
            <div className="container">
                <SectionsHeader mainText="Наш стек технологий" />

                <div className={styles.stackContainer}>
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 60, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{
                                type: "spring",
                                stiffness: 90,
                                damping: 13,
                                delay: index * 0.18
                            }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.25 }
                            }}
                        >
                            <StackCard
                                version={category.version}
                                iconsClass={category.iconsClass}
                                title={category.title}
                                items={category.items}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechStack;
