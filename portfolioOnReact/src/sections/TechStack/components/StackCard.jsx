import TechList from "./TechList"

const StackCard = (props) => {
    const { version, iconsClass, title, items } = props;
    return (
        <div className="stack-category">
            <h3 className={`category-title ${version}-title`}>
                <i className={iconsClass}></i>
                {title}
            </h3>
            <TechList items={items} />
        </div>
    )
}
export default StackCard