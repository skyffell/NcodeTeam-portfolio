function Ellipse(props) {
    const { version, title } = props;
    return (<div className={version}>
        <div className="pulse-circle"></div>
        {title && <span>{title}</span>}
    </div>)
}
export default Ellipse