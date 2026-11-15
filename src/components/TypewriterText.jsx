// Универсальный компонент эффекта печатной машинки (Typewriter)
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

function TypewriterText({
    text = "",
    speed = 35,
    delay = 200,
    cursor = true,
    cursorChar = "|",
    cursorColor = "#00d4ff",
    className = "",
    startOnView = true,
    onComplete
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [displayedText, setDisplayedText] = useState("");
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        if (startOnView && !isInView) return;

        let currentIndex = 0;

        const startTimeout = setTimeout(() => {
            const intervalId = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(intervalId);
                    setIsFinished(true);
                    if (onComplete) onComplete();
                }
            }, speed);

            return () => clearInterval(intervalId);
        }, delay);

        return () => {
            clearTimeout(startTimeout);
        };
    }, [text, speed, delay, isInView, startOnView, onComplete]);

    return (
        <span ref={ref} className={className}>
            {displayedText}
            {cursor && (
                <span
                    style={{
                        color: cursorColor,
                        fontWeight: 700,
                        marginLeft: "2px",
                        opacity: isFinished ? 0.7 : 1,
                        animation: "blinkCursor 1s infinite"
                    }}
                >
                    {cursorChar}
                </span>
            )}
            <style>{`
                @keyframes blinkCursor {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </span>
    );
}

export default TypewriterText;
