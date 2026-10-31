import SectionsHeader from "../../components/SectionsHeader"
import StackCard from "./components/StackCard"

function TechStack(){
return(<section className="tech-stack" id="tech">
        <div className="container">
          
          <SectionsHeader mainText = "Наш стек технологий"/>
            
            <div className="stack-container">
                
                <StackCard />
                
                <StackCard />

            </div>
        </div>
    </section>)
}
export default TechStack