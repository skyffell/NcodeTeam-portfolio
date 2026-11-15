// Управляемая форма обратной связи с валидацией и анимацией
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@components/Button";
import FormContactInput from "./FormContactInput";
import styles from "./ContactForm.module.scss";

const defaultFields = [
    {
        id: "project-type",
        name: "projectType",
        label: "Ваш проект похож на:",
        type: "select",
        options: ["Корпоративный сайт / Лендинг", "Веб-приложение / SaaS", "Backend / API сервис", "Другое"],
        required: true
    },
    {
        id: "name",
        name: "name",
        label: "Ваше имя",
        type: "text",
        placeholder: "Иван Иванов",
        required: true
    },
    {
        id: "email",
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "example@mail.com",
        required: true
    },
    {
        id: "message",
        name: "message",
        label: "Опишите ваш проект",
        type: "textarea",
        placeholder: "Расскажите подробнее о вашей задаче...",
        required: true
    }
];

const ContactForm = (props) => {
    const {
        fields = defaultFields,
        buttonTitle = "Обсудить проект",
        onSubmit
    } = props;

    const [formValues, setFormValues] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(formValues);
        }
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormValues({});
        }, 3500);
    };

    return (
        <div className={styles.contactForm}>
            {isSubmitted ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: "center", padding: "2rem 1rem" }}
                >
                    <i
                        className="fas fa-check-circle"
                        style={{ fontSize: "3rem", color: "#10b981", marginBottom: "1rem" }}
                    ></i>
                    <h3 style={{ marginBottom: "0.5rem" }}>Заявка отправлена!</h3>
                    <p style={{ color: "#94a3b8" }}>Мы свяжемся с вами в течение нескольких часов.</p>
                </motion.div>
            ) : (
                <form id="project-form" onSubmit={handleSubmit}>
                    {fields.map((field) => (
                        <FormContactInput
                            key={field.id || field.name}
                            {...field}
                            value={formValues[field.name] || ""}
                            onChange={handleChange}
                        />
                    ))}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                            type="submit"
                            variant="clean"
                            className={styles.submitBtn}
                            title={buttonTitle}
                        />
                    </motion.div>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
