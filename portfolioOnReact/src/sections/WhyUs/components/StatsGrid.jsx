const StatsGrid = (props) => {
    const { items = [] } = props;
    return (
        <div className="stats-grid">
            {items.map((item, index) => (
                <div key={item.id || item.title || index} className="stat-item">
                    <div className="stat-number" data-target={item.target}>0</div>
                    <div className="stat-label">{item.title}</div>
                </div>
            ))}
        </div>
    );
};

export default StatsGrid;
