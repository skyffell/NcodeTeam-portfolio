const TechUsed = (props) => {
    const { titles = [] } = props;
    return (
        <div className="tech-used">
            {titles.map((title, index) => (
                <span key={title || index} className="tech-tag">
                    {title}
                </span>
            ))}
        </div>
    );
};

export default TechUsed;
