const WhyUsCard = (props) => {
    const { version, title, texts = [] } = props
    const isTeam = version === "n-code-team" || version === "our-team";
    return (<div className={`comparison-card ${isTeam ? "our-team highlighted" : "solo-dev"}`}>
        <h4>{title}</h4>
        <ul>
            {texts.map((text, index) => (
                <li key={index}>
                    <i className={`fas ${isTeam ? "fa-check" : "fa-times"}`}></i> {text}
                </li>
            ))}
        </ul>
    </div>)
}
export default WhyUsCard