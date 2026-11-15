// Компонент анимированного бинарного фона с падающими символами 
import { useEffect, useRef } from "react";
import styles from "./BinaryBackground.module.scss";

function BinaryBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let animationFrameId;

        // Настройка размеров холста
        const resizeCanvas = () => {
            canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
            canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Настройки бинарного дождя
        const fontSize = 15;
        const columns = Math.floor(canvas.width / fontSize);
        // Массив Y-позиций для каждой колонки
        const drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

        // Цветовая палитра: неоновый циан и фиолетовый
        const colors = ["#00d4ff", "#8b5cf6", "#38bdf8", "#a78bfa", "#0ea5e9"];

        let lastTime = 0;
        const fps = 24;
        const interval = 1000 / fps;

        const draw = (currentTime) => {
            animationFrameId = requestAnimationFrame(draw);

            const delta = currentTime - lastTime;
            if (delta < interval) return;
            lastTime = currentTime - (delta % interval);

            // Полупрозрачная очистка для создания эффекта шлейфа
            ctx.fillStyle = "rgba(10, 11, 16, 0.12)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px 'Courier New', monospace`;

            for (let i = 0; i < drops.length; i++) {
                // Случайный бит: 0 или 1
                const text = Math.random() > 0.5 ? "1" : "0";
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                // Случайный цвет символа
                const color = colors[i % colors.length];
                ctx.fillStyle = color;
                ctx.globalAlpha = Math.random() * 0.4 + 0.15; // Мягкая прозрачность, чтобы не мешать тексту
                ctx.fillText(text, x, y);

                // Если символ ушел за пределы экрана, сбрасываем наверх с вероятностью
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
            ctx.globalAlpha = 1.0;
        };

        animationFrameId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <div className={styles.binaryWrapper}>
            <canvas ref={canvasRef} className={styles.canvas} />
            <div className={styles.overlayGlow} />
        </div>
    );
}

export default BinaryBackground;
