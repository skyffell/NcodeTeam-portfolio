// Сетка статистики с анимированным счетчиком чисел при скролле
import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import styles from "./StatsGrid.module.scss";

function StatCounterItem({ target, title }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const numericTarget = parseInt(target, 10) || 0;
            const controls = animate(0, numericTarget, {
                duration: 1.8,
                ease: "easeOut",
                onUpdate: (latest) => setCount(Math.round(latest))
            });
            return () => controls.stop();
        }
    }, [isInView, target]);

    return (
        <div ref={ref} className={styles.statItem}>
            <div className={styles.statNumber}>
                {count}+
            </div>
            <div className={styles.statLabel}>{title}</div>
        </div>
    );
}

const StatsGrid = (props) => {
    const { items = [] } = props;
    return (
        <div className={styles.statsGrid}>
            {items.map((item, index) => (
                <StatCounterItem
                    key={item.id || item.title || index}
                    target={item.target}
                    title={item.title}
                />
            ))}
        </div>
    );
};

export default StatsGrid;
