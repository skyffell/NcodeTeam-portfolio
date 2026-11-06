import Button from "@components/Button";

const ProjectFilters = (props) => {
    const {
        filters = ["Все проекты", "Fullstack", "Frontend", "Backend"],
        activeFilter = "Все проекты",
        onFilterChange
    } = props;

    return (
        <div className="project-filters">
            {filters.map((filter, index) => (
                <Button
                    key={filter || index}
                    variant="filter"
                    className={activeFilter === filter ? "active" : ""}
                    onClick={() => onFilterChange && onFilterChange(filter)}
                >
                    {filter}
                </Button>
            ))}
        </div>
    );
};

export default ProjectFilters;
