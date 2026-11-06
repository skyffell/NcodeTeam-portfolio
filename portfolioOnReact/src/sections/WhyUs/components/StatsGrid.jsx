const StatsGrid = (props) => {
    const { items } = props
    return (<div className="stats-grid">
        {items.map((title, target) => {
            <div className="stat-item">
                <div className="stat-number" data-target={target}>0</div>
                <div className="stat-label">{title}</div>
            </div>
        })}
    </div>)
}
export default StatsGrid