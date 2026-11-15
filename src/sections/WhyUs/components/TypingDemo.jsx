// Интерактивный терминал с синхронной печатью философии и production-кода
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./TypingDemo.module.scss";

// Реалистичный сниппет fullstack-архитектуры команды N-code
const codeSnippet = [
    { text: "// [Client] Реактивный интерфейс и стейт на React + TypeScript", type: "comment" },
    { text: 'import { useState, useEffect } from "react";', type: "keyword" },
    { text: "interface PipelineConfig { mode: 'fullstack'; cache: boolean; }", type: "type" },
    { text: "", type: "code" },
    { text: "export const useDigitalPipeline = (config: PipelineConfig) => {", type: "func" },
    { text: "  const [status, setStatus] = useState<'idle' | 'ready'>('idle');", type: "state" },
    { text: "  return { status, latency: 12, ready: true };", type: "return" },
    { text: "};", type: "code" },
    { text: "", type: "code" },
    { text: "// [Server] Высоконагруженный асинхронный API на Python FastAPI", type: "comment" },
    { text: '@app.get("/api/v1/pipeline/metrics", response_model=SystemMetrics)', type: "decorator" },
    { text: "async def get_metrics(db: AsyncSession = Depends(get_db)):", type: "func" },
    { text: "    cached = await redis_cluster.get('metrics:realtime')", type: "code" },
    { text: "    return {'status': 'healthy', 'rps': 2400, 'db_ok': True}", type: "return" }
];

// Тезисы философии разработки N-code
const philosophyItems = [
    "Мы считаем, что идеальный продукт рождается на стыке красоты и функциональности.",
    "Frontend - это лицо продукта, безупречный UX и эстетика, которую видят ваши пользователи.",
    "Backend - это надежный мозг: архитектура, безопасность, базы данных и скорость работы под нагрузкой.",
    "Объединяя обе компетенции, мы создаем цифровые решения, которые превосходят ожидания."
];

function TypingDemo() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });

    // Состояние печати текста философии (слева)
    const [leftParagraphIndex, setLeftParagraphIndex] = useState(0);
    const [leftCharIndex, setLeftCharIndex] = useState(0);
    const [completedLeft, setCompletedLeft] = useState([]);

    // Состояние печати кода в терминале (справа)
    const [rightLineIndex, setRightLineIndex] = useState(0);
    const [rightCharIndex, setRightCharIndex] = useState(0);
    const [completedRight, setCompletedRight] = useState([]);

    // Логика последовательной печати текста философии слева
    useEffect(() => {
        if (!isInView) return;
        if (leftParagraphIndex >= philosophyItems.length) return;

        const currentTarget = philosophyItems[leftParagraphIndex];

        if (leftCharIndex < currentTarget.length) {
            const timer = setTimeout(() => {
                setLeftCharIndex((prev) => prev + 1);
            }, 18);
            return () => clearTimeout(timer);
        } else {
            const pauseTimer = setTimeout(() => {
                setCompletedLeft((prev) => [...prev, currentTarget]);
                setLeftParagraphIndex((prev) => prev + 1);
                setLeftCharIndex(0);
            }, 250);
            return () => clearTimeout(pauseTimer);
        }
    }, [isInView, leftParagraphIndex, leftCharIndex]);

    // Логика последовательной печати строк кода справа
    useEffect(() => {
        if (!isInView) return;
        if (rightLineIndex >= codeSnippet.length) return;

        const currentLine = codeSnippet[rightLineIndex].text;

        if (rightCharIndex < currentLine.length) {
            const timer = setTimeout(() => {
                setRightCharIndex((prev) => prev + 1);
            }, 18);
            return () => clearTimeout(timer);
        } else {
            const nextLineTimer = setTimeout(() => {
                setCompletedRight((prev) => [...prev, codeSnippet[rightLineIndex]]);
                setRightLineIndex((prev) => prev + 1);
                setRightCharIndex(0);
            }, 140);
            return () => clearTimeout(nextLineTimer);
        }
    }, [isInView, rightLineIndex, rightCharIndex]);

    return (
        <motion.div
            ref={containerRef}
            className={styles.typingDemo}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <h3>Наша философия разработки</h3>

            <div className={styles.philosophyContent}>
                {/* Левая колонка: анимированная печать философии */}
                <div className={styles.philosophyText}>
                    {/* Уже полностью напечатанные абзацы */}
                    {completedLeft.map((text, idx) => (
                        <p key={idx} className={styles.active}>
                            {text}
                        </p>
                    ))}

                    {/* Текущий печатающийся абзац */}
                    {leftParagraphIndex < philosophyItems.length && (
                        <p className={styles.active}>
                            {philosophyItems[leftParagraphIndex].slice(0, leftCharIndex)}
                            <span style={{ color: "#00d4ff", animation: "blinkCursor 0.8s infinite" }}>|</span>
                        </p>
                    )}

                    {/* Еще не начатые абзацы (пустые плейсхолдеры для сохранения высоты) */}
                    {philosophyItems.slice(leftParagraphIndex + 1).map((_, idx) => (
                        <p key={idx} style={{ opacity: 0, minHeight: "2.8rem" }}>
                            ...
                        </p>
                    ))}
                </div>

                {/* Правая колонка: интерактивный терминал с кодом */}
                <div className={styles.philosophyVisual}>
                    <div className={styles.terminalBar}>
                        <div className={styles.terminalDots}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={styles.terminalTab}>
                            <i className="fas fa-code"></i>
                            <span>synergy_pipeline.ts</span>
                        </div>
                    </div>

                    <div className={styles.codeAnimation}>
                        {/* Полностью напечатанные строки с номерами */}
                        {completedRight.map((item, idx) => (
                            <div key={idx} className={styles.codeLine}>
                                <span className={styles.lineNumber}>
                                    {String(idx + 1).padStart(2, "0")}
                                </span>
                                <span className={`${styles.lineText} ${styles[item.type] || ""}`}>
                                    {item.text || " "}
                                </span>
                            </div>
                        ))}

                        {/* Текущая печатающаяся строка */}
                        {rightLineIndex < codeSnippet.length && (
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>
                                    {String(rightLineIndex + 1).padStart(2, "0")}
                                </span>
                                <span className={`${styles.lineText} ${styles[codeSnippet[rightLineIndex].type] || ""}`}>
                                    {codeSnippet[rightLineIndex].text.slice(0, rightCharIndex)}
                                    <span style={{ color: "#00d4ff", animation: "blinkCursor 0.8s infinite" }}>|</span>
                                </span>
                            </div>
                        )}

                        {/* Завершающий статус готовности */}
                        {rightLineIndex >= codeSnippet.length && (
                            <div className={styles.codeLine} style={{ marginTop: "0.5rem" }}>
                                <span className={styles.lineNumber}>&gt;</span>
                                <span style={{ color: "#10b981", animation: "blinkCursor 1s infinite" }}>
                                    Production pipeline active [OK]
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes blinkCursor {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </motion.div>
    );
}

export default TypingDemo;
