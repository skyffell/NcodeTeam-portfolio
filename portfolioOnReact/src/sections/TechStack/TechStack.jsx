import SectoinsHeader from "../../components/SectionsHeader"
import StackCard from "./components/StackCard"

function TechStack(){
return(<section class="tech-stack" id="tech">
        <div class="container">
          
          <SectoinsHeader mainText = "Наш стек технологий"/>
            
            <div class="stack-container">
                
                <StackCard />
                
                <StackCard />

            </div>
        </div>
    </section>)
}
export default TechStack