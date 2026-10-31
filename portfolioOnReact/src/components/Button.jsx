import Arrow from "./Arrow"
function Button(props) {
    const { version, title, href = "#projects" } = props
    return (<a href={href} className={`cta-button ${version ? `cta-${version}` : ''}`}>
        <span>{title}</span>
        <Arrow orientation="down" className="" />
    </a>)
}
export default Button
