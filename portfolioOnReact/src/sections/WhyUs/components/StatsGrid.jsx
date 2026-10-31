const StatsGrid = () =>{
    return( <div className="stats-grid">
                <div className="stat-item">
                    <div className="stat-number" data-target="12">0</div>
                    <div className="stat-label">Завершенных проектов</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number" data-target="50000">0</div>
                    <div className="stat-label">Строк кода</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number" data-target="45">0</div>
                    <div className="stat-label">API endpoints</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number" data-target="8">0</div>
                    <div className="stat-label">Довольных клиентов</div>
                </div>
            </div>)
}
export default StatsGrid