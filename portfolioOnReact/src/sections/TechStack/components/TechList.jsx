import { version } from "react"
import TechItem from "./TechItem"
const TechList = () => {
    return(
        <div>
         <SectionsHeader mainText = {mainText} version ={version}/>
     <div class="tech-items">
        <TechItem />
                        
        <TechItem />
                        
        <TechItem />
    </div>
    </div>
    )
}
export default TechList