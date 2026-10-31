const ProjectCard = () => {
    return( <div className="project-card" data-category="fullstack">
                    <div className="project-preview">
                        <div className="preview-content">
                            <div className="browser-bar">
                                <div className="browser-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="preview-screen">
                                <div className="api-demo">
                                    <div className="endpoint">GET /api/users</div>
                                    <div className="response">"users": [...]</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-info">
                        <h3>CRM Система</h3>
                        <p>Полнофункциональная система управления клиентами с аналитикой</p>
                        
                        <div className="tech-used">
                            <span className="tech-tag">Flask</span>
                            <span className="tech-tag">JavaScript</span>
                            <span className="tech-tag">SQLite</span>
                        </div>
                        
                        <div className="contribution">
                            <div className="frontend-contrib">
                                <i className="fas fa-palette"></i>
                                Frontend: Алексей
                            </div>
                            <div className="backend-contrib">
                                <i className="fas fa-server"></i>
                                Backend: Никита
                            </div>
                        </div>
                        
                        <div className="project-links">
                            <a href="#" className="project-link">
                                <i className="fas fa-external-link-alt"></i>
                                Демо
                            </a>
                            <a href="#" className="project-link">
                                <i className="fab fa-github"></i>
                                Код
                            </a>
                        </div>
                    </div>
                </div>)
}
export default ProjectCard