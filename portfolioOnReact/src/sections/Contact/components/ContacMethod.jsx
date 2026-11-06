const ContactMethod = ({ iconsClass, title }) => {
    return (<div className="contact-method">
        <i className={iconsClass}></i>
        <span>{title}</span>
    </div>)
}
export default ContactMethod