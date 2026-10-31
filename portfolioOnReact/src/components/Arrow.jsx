function Arrow(props) {
    const { orientation = "right", className = "process-arrow" } = props;
    return (
        <span className={className}>
            <i className={`fas fa-arrow-${orientation}`}></i>
        </span>
    );
}
export default Arrow;