function Card(props) {
    const { version, title, text, skills = [], iconsClass } = props;
    //Если это карточка шага
    if (version === "step") {
        return (

            <div className="process-step">
                <div className="step-icon">
                    <i className={`fas ${iconsClass}`}></i>
                </div>
                <h3>{title}</h3>
                {text && <p>{text}</p>}
                {skills.length > 0 && (
                    <div className="step-tech">
                        {skills.map((skill, index) => (
                            <span key={skill || index}>{skill}</span>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    //Если это карточка Hero
    const devClass = version ? (version.endsWith('-dev') ? version : `${version}-dev`) : '';

    return (<div className={`dev-card ${devClass}`}>
        <div className="dev-avatar">
            <i className={`fas ${iconsClass}`}></i>
        </div>
        <h3>{title}</h3>
        {text && <p>{text}</p>}
        <div className="dev-skills">
            {skills.map((skill, index) => (
                <span key={skill || index} className="skill-tag">{skill}</span>
            ))}
        </div>
    </div>)
}
export default Card