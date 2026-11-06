const Contrib = (props) => {
    const { version, iconClass, title } = props
    return (
        <div className={`${version}-contrib`}>
            <i className={iconClass}></i>
            {title}
        </div>
    )
}
export default Contrib