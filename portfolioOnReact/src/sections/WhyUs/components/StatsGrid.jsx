const StatsGrid = () =>{
    return( <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number" data-target="12">0</div>
                    <div class="stat-label">Завершенных проектов</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" data-target="50000">0</div>
                    <div class="stat-label">Строк кода</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" data-target="45">0</div>
                    <div class="stat-label">API endpoints</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" data-target="8">0</div>
                    <div class="stat-label">Довольных клиентов</div>
                </div>
            </div>)
}
export default StatsGrid