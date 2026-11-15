export const comparisonData = {
    solo: {
        version: "single",
        title: "Один разработчик",
        texts: [
            "Ограниченный стек технологий",
            "Медленная разработка",
            "Узкая специализация",
            "Сложность масштабирования"
        ]
    },
    team: {
        version: "n-code-team",
        title: "Команда N-Code",
        texts: [
            "Полный цикл разработки",
            "Контроль качества на каждом этапе",
            "Широкая экспертиза",
            "Быстрое прототипирование"
        ]
    }
};

export const statsData = [
    { id: "stat-projects", title: "Завершенных проектов", target: 12 },
    { id: "stat-code", title: "Строк кода", target: 50000 },
    { id: "stat-endpoints", title: "API endpoints", target: 45 },
    { id: "stat-clients", title: "Довольных клиентов", target: 8 }
];

export const philosophyData = [
    {
        text: "Мы считаем, что идеальный продукт рождается на стыке красоты и функциональности.",
        delay: 0
    },
    {
        text: "Frontend - это лицо продукта, то, что видят пользователи.",
        delay: 1500
    },
    {
        text: "Backend - это мозг, который обеспечивает надежность и производительность.",
        delay: 3000
    },
    {
        text: "Вместе мы создаем решения, которые не просто работают, а восхищают.",
        delay: 4500
    }
];

export const whyUsData = {
    comparison: comparisonData,
    stats: statsData,
    philosophy: philosophyData
};

export default whyUsData;

