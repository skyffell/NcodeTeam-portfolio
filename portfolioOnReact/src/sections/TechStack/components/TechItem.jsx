const TechItem = (props) => {
    const { title, iconsClass, level, dataTech } = props
    return (
        <div className="tech-item" data-tech={dataTech}>
            <div className="tech-icon">
                <i className={iconsClass}></i>
            </div>
            <span>{title}</span>
            <div className="tech-progress">
                <div className="progress-bar" data-level={`${level}%`}></div>
            </div>
        </div>
    )
}
export default TechItem