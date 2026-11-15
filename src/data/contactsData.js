export const availabilityData = {
    isFree: true,
    freeText: "Свободны для новых проектов",
    busyText: "Заняты, скоро освободимся"
};

export const contactMethodsData = [
    {
        id: "contact-email",
        title: "N-codeTeam@gmail.com",
        iconsClass: "fas fa-envelope",
        url: "mailto:N-codeTeam@gmail.com"
    },
    {
        id: "contact-phone",
        title: "+375(44)7517869",
        iconsClass: "fas fa-phone",
        url: "tel:+375447517869"
    },
    {
        id: "contact-tg",
        title: "@skyffell",
        iconsClass: "fab fa-telegram",
        url: "https://t.me/skyffell"
    }
];

export const socialLinksData = [
    {
        id: "social-github",
        iconClass: "fab fa-github",
        url: "https://github.com",
        title: "GitHub"
    },
    {
        id: "social-telegram",
        iconClass: "fab fa-telegram",
        url: "https://t.me/skyffell",
        title: "Telegram"
    },
    {
        id: "social-linkedin",
        iconClass: "fab fa-linkedin",
        url: "https://linkedin.com",
        title: "LinkedIn"
    }
];

export const contactFormFieldsData = [
    {
        id: "field-project-type",
        name: "projectType",
        label: "Ваш проект похож на: ",
        type: "select",
        options: [
            "Корпоративный сайт / Лендинг",
            "Веб-приложение / SaaS",
            "Backend / API сервис",
            "Другое"
        ],
        required: true
    },
    {
        id: "field-name",
        name: "name",
        label: "Ваше имя",
        type: "text",
        placeholder: "Иван Иванов",
        required: true
    },
    {
        id: "field-email",
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "example@mail.com",
        required: true
    },
    {
        id: "field-message",
        name: "message",
        label: "Опишите ваш проект",
        type: "textarea",
        placeholder: "Расскажите подробнее о вашей задаче...",
        required: true
    }
];

export const contactsData = {
    availability: availabilityData,
    methods: contactMethodsData,
    socials: socialLinksData,
    fields: contactFormFieldsData
};

export default contactsData;

