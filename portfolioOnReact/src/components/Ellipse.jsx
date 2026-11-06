function Ellipse(props) {
    const { version, title, hasPulse = false } = props;

    return (
        <div className={version}>
            {hasPulse && <div className="pulse-circle"></div>}
            {title && <span>{title}</span>}
        </div>
    );
}

export default Ellipse;