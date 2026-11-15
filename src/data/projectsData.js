export const projectFilters = ["Все проекты", "Fullstack", "Frontend", "Backend"];

export const projectsData = [
    {
        id: "project-crm",
        title: "CRM Система",
        description: "Полнофункциональная система управления клиентами с аналитикой",
        category: "fullstack",
        technologies: ["Flask", "JavaScript", "SQLite"],
        preview: {
            endpoint: "GET /api/v1/crm/customers",
            response: '{"total": 128, "status": "active"}'
        },
        contribution: [
            { version: "frontend", title: "Frontend: Алексей", iconClass: "fas fa-palette" },
            { version: "backend", title: "Backend: Никита", iconClass: "fas fa-server" }
        ],
        links: [
            { title: "Демо", iconClass: "fas fa-external-link-alt", url: "#" },
            { title: "Код", iconClass: "fab fa-github", url: "#" }
        ]
    },
    {
        id: "project-analytics",
        title: "Платформа аналитики",
        description: "Интерактивный дашборд с графиками и статистикой в реальном времени",
        category: "frontend",
        technologies: ["React", "CSS3", "JavaScript"],
        preview: {
            endpoint: "GET /api/analytics/realtime",
            response: '{"activeUsers": 142, "rps": 38.5}'
        },
        contribution: [
            { version: "frontend", title: "Frontend: Алексей", iconClass: "fas fa-palette" }
        ],
        links: [
            { title: "Демо", iconClass: "fas fa-external-link-alt", url: "#" },
            { title: "Код", iconClass: "fab fa-github", url: "#" }
        ]
    },
    {
        id: "project-auth-service",
        title: "Микросервис авторизации",
        description: "Высоконагруженный сервис аутентификации на FastAPI с JWT, OAuth2 и Redis сессиями",
        category: "backend",
        technologies: ["Python", "FastAPI", "Redis", "PostgreSQL"],
        preview: {
            endpoint: "POST /auth/jwt/refresh",
            response: '{"status": 200, "access_token": "ey..."}'
        },
        contribution: [
            { version: "backend", title: "Backend: Никита", iconClass: "fas fa-server" }
        ],
        links: [
            { title: "API Docs", iconClass: "fas fa-book", url: "#" },
            { title: "Код", iconClass: "fab fa-github", url: "#" }
        ]
    }
];

export default projectsData;
