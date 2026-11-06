import Arrow from "./Arrow"
function Button(props) {
    const { version, title, href = "#projects", hasArrow } = props
    return (<a href={href} className={`cta-button ${version ? `cta-${version}` : ''}`}>
        <span>{title}</span>
        {hasArrow && <Arrow orientation="down" className="" />}
    </a>)
}
export default Button
