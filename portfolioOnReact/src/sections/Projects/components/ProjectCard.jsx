const ProjectCard = () => {
    return( <div class="project-card" data-category="fullstack">
                    <div class="project-preview">
                        <div class="preview-content">
                            <div class="browser-bar">
                                <div class="browser-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div class="preview-screen">
                                <div class="api-demo">
                                    <div class="endpoint">GET /api/users</div>
                                    <div class="response">"users": [...]</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="project-info">
                        <h3>CRM Система</h3>
                        <p>Полнофункциональная система управления клиентами с аналитикой</p>
                        
                        <div class="tech-used">
                            <span class="tech-tag">Flask</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">SQLite</span>
                        </div>
                        
                        <div class="contribution">
                            <div class="frontend-contrib">
                                <i class="fas fa-palette"></i>
                                Frontend: Алексей
                            </div>
                            <div class="backend-contrib">
                                <i class="fas fa-server"></i>
                                Backend: Никита
                            </div>
                        </div>
                        
                        <div class="project-links">
                            <a href="#" class="project-link">
                                <i class="fas fa-external-link-alt"></i>
                                Демо
                            </a>
                            <a href="#" class="project-link">
                                <i class="fab fa-github"></i>
                                Код
                            </a>
                        </div>
                    </div>
                </div>)
}
export default ProjectCard