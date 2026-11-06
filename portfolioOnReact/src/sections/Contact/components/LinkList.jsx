import Button from "../../../components/Button";

const defaultLinks = [
    { iconClass: "fab fa-github", url: "#" },
    { iconClass: "fab fa-telegram", url: "#" },
    { iconClass: "fab fa-linkedin", url: "#" }
];

const LinkList = (props) => {
    const { links = defaultLinks } = props;

    return (
        <div className="social-links">
            {links.map((link, index) => (
                <Button
                    key={link.iconClass || index}
                    as="a"
                    href={link.url}
                    variant="social"
                >
                    <i className={link.iconClass}></i>
                </Button>
            ))}
        </div>
    );
};

export default LinkList;
