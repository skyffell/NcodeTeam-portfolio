import Contrib from "./Contrib"
const Contribution = (props) => {
    const { contribution } = props
    return (
        <div className="contribution">
            {contribution.map((item, index) => <Contrib key={index} iconClass={item.iconClass} version={item.version} title={item.title} />)}
        </div>
    )
}
export default Contribution