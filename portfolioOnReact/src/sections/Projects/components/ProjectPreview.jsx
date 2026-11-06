const ProjectPreview = (props) => {
    const { endpoint = "GET /api/users", response = '"users": [...]' } = props;
    return (
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
                        <div className="endpoint">{endpoint}</div>
                        <div className="response">{response}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPreview;
