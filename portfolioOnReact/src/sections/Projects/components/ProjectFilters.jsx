// Компонент кнопок фильтрации проектов по категориям
import Button from "@components/Button";
import styles from "./ProjectFilters.module.scss";

const ProjectFilters = (props) => {
    const {
        filters = ["Все проекты", "Fullstack", "Frontend", "Backend"],
        activeFilter = "Все проекты",
        onFilterChange
    } = props;

    return (
        <div className={styles.projectFilters}>
            {filters.map((filter, index) => (
                <Button
                    key={filter || index}
                    variant="filter"
                    className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ""}`.trim()}
                    onClick={() => onFilterChange && onFilterChange(filter)}
                >
                    {filter}
                </Button>
            ))}
        </div>
    );
};

export default ProjectFilters;
