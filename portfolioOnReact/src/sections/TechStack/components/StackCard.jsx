import TechList from "./TechList"

const StackCard = () =>{
    return(
        <div className="stack-category">
            <h3 className="category-title frontend-title">
                <i className="fas fa-desktop"></i>
                Frontend
            </h3>
            <TechList />
        </div>
    )
}
export default StackCard