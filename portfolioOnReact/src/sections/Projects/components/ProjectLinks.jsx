import Button from "../../../components/Button";

const ProjectLinks = (props) => {
    const { items = [] } = props;
    return (
        <div className="project-links">
            {items.map(({ title, iconClass, url }, index) => (
                <Button
                    key={url || title || index}
                    as="a"
                    href={url}
                    variant="project-link"
                >
                    <i className={iconClass}></i>
                    {title}
                </Button>
            ))}
        </div>
    );
};

export default ProjectLinks;
