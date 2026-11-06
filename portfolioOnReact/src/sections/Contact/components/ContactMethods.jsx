import ContactMethod from "./ContacMethod";

const ContactMethods = (props) => {
    const { items = [] } = props;
    return (
        <div className="contact-methods">
            {items.map((item, index) => (
                <ContactMethod
                    key={item.id || item.title || index}
                    iconsClass={item.iconsClass}
                    title={item.title}
                />
            ))}
        </div>
    );
};

export default ContactMethods;
