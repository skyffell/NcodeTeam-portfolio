import Button from "@components/Button";
import FormContactInput from "./FormContactInput";

const defaultFields = [
    {
        id: "project-type",
        name: "projectType",
        label: "Ваш проект похож на: ",
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
        inputTitle,
        inputType,
        buttonTitle = "Обсудить проект",
        onSubmit
    } = props;

    const resolvedFields = inputTitle
        ? inputTitle.map((title, index) => {
              const explicitType = inputType && inputType[index];
              const guessedType =
                  explicitType ||
                  (index === 0
                      ? "select"
                      : index === 1
                      ? "text"
                      : index === 2
                      ? "email"
                      : "textarea");

              return {
                  id: `contact-field-${index}`,
                  name: `field_${index}`,
                  label: title,
                  type: guessedType,
                  options:
                      guessedType === "select"
                          ? ["Корпоративный сайт / Лендинг", "Веб-приложение / SaaS", "Backend / API сервис", "Другое"]
                          : undefined,
                  placeholder:
                      guessedType === "email"
                          ? "example@mail.com"
                          : guessedType === "textarea"
                          ? "Опишите ваш проект..."
                          : "",
                  required: true
              };
          })
        : fields;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(e);
    };

    return (
        <div className="contact-form">
            <form id="project-form" onSubmit={handleSubmit}>
                {resolvedFields.map((field) => (
                    <FormContactInput key={field.id || field.label} {...field} />
                ))}
                <Button type="submit" className="submit-btn" title={buttonTitle} />
            </form>
        </div>
    );
};

export default ContactForm;
