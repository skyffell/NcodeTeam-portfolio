import TechItem from "./TechItem"

const TechList = (props) => {
    const { items } = props;
    return (
        <div className="tech-items">
            {items.map(item => (
                <TechItem key={item.id} {...item} />
            ))}
        </div>
    )
}
export default TechList