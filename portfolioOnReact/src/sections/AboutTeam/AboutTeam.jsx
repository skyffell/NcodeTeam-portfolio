import SectoinsHeader from "../../components/SectionsHeader"
import StepsList from "./StepsList"

function AboutTeam() {
    return(<section class="about-team" id="about">
        <div class="container">
          
        <SectoinsHeader 
            mainText = "Наш рабочий процесс" 
            subText = "Слаженная работа двух специалистов для достижения лучшего результата"/>

           <StepsList />
           
        </div>
    </section>)
}
export default AboutTeam