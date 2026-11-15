// Список этапов разработки с выразительной пружинной анимацией при скролле
import React from "react";
import { motion } from "framer-motion";
import Arrow from "@components/Arrow";
import Card from "@components/Card";
import { workflowData } from "@data";
import styles from "./StepsList.module.scss";

function StepsList({ steps = workflowData }) {
    return (
        <div className={styles.workflow}>
            {steps.map((step, index) => (
                <React.Fragment key={step.id || step.title || index}>
                    <motion.div
                        initial={{ opacity: 0, y: 60, scale: 0.85 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 12,
                            delay: index * 0.16
                        }}
                        whileHover={{
                            y: -12,
                            scale: 1.04,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <Card
                            version="step"
                            title={step.title}
                            text={step.text}
                            skills={step.skills}
                            iconsClass={step.iconsClass}
                        />
                    </motion.div>
                    {index < steps.length - 1 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.4 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 150,
                                damping: 10,
                                delay: index * 0.16 + 0.1
                            }}
                        >
                            <Arrow orientation="right" />
                        </motion.div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default StepsList;
