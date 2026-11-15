import styles from "./Arrow.module.scss";

function Arrow(props) {
    const { orientation = "right", className = "" } = props;
    const combinedClassName = `${styles.processArrow} ${className}`.trim();

    return (
        <span className={combinedClassName}>
            <i className={`fas fa-arrow-${orientation}`}></i>
        </span>
    );
}

export default Arrow;
