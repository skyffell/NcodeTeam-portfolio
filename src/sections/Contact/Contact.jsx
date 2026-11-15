// Секция контактной информации и формы связи с выразительными анимациями
import { motion } from "framer-motion";
import SectionsHeader from "@components/SectionsHeader";
import ContactForm from "./components/ContactForm";
import ContactMethods from "./components/ContactMethods";
import LinkList from "./components/LinkList";
import TeamAvailability from "./components/TeamAvailability";
import {
    availabilityData,
    contactMethodsData,
    socialLinksData,
    contactFormFieldsData
} from "@data";
import styles from "./Contact.module.scss";

function Contact() {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

    return (
        <section className={styles.contact} id="contact">
            <div className="container">
                <div className={styles.contactContent}>
                    {/* Левая колонка со способами связи */}
                    <motion.div
                        className={styles.contactInfo}
                        initial={{ opacity: 0, x: isMobile ? 0 : -60, y: isMobile ? 30 : 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                            type: "spring",
                            stiffness: 90,
                            damping: 13
                        }}
                    >
                        <SectionsHeader mainText="Начнем проект вместе?" />

                        <TeamAvailability {...availabilityData} />

                        <ContactMethods items={contactMethodsData} />

                        <LinkList links={socialLinksData} />
                    </motion.div>

                    {/* Правая колонка с интерактивной формой */}
                    <motion.div
                        initial={{ opacity: 0, x: isMobile ? 0 : 60, y: isMobile ? 40 : 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                            type: "spring",
                            stiffness: 90,
                            damping: 13,
                            delay: 0.15
                        }}
                    >
                        <ContactForm
                            fields={contactFormFieldsData}
                            buttonTitle="Обсудить проект"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
