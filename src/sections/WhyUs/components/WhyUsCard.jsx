import styles from "./WhyUsCard.module.scss";

const WhyUsCard = (props) => {
    const { version, title, texts = [] } = props;
    const isTeam = version === "n-code-team" || version === "our-team";
    const teamClasses = isTeam ? `${styles.ourTeam} ${styles.highlighted}` : styles.soloDev;

    return (
        <div className={`${styles.comparisonCard} ${teamClasses}`.trim()}>
            <h4>{title}</h4>
            <ul>
                {texts.map((text, index) => (
                    <li key={index}>
                        <i className={`fas ${isTeam ? "fa-check" : "fa-times"}`}></i>
                        <span>{text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WhyUsCard;
