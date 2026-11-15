import styles from "./Ellipse.module.scss";

function Ellipse(props) {
    const { version, title, hasPulse = false } = props;
    const isSynergy = version === "synergy";
    const isVs = version === "vs-circle" || version === "vsCircle";
    const containerClass = isSynergy ? styles.synergy : isVs ? styles.vsCircle : "";

    return (
        <div className={containerClass}>
            {hasPulse && <div className={styles.pulseCircle}></div>}
            {title && <span>{title}</span>}
        </div>
    );
}

export default Ellipse;
