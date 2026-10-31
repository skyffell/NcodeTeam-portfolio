import Arrow from "../../components/Arrow"
import Button from "../../components/Button"
import Card from "../../components/Card"
import Ellipse from "../../components/Ellipse"
import SectoinsHeader from "../../components/SectionsHeader"
function Hero() {

    return( 
    <section class="hero" id="home">
        <div class="container">
            <div class="team-presentation">
               
            <SectionsHeader 
            mainText = "N-CODE TEAM" 
            subText = "От пикселя до API - создаем цифровые решения под ключ"> 
            </SectionsHeader>

                <div class="developer-cards">
                 
                     <Card 
                     version = "frontend" 
                     title = "Frontend Developer"
                    skills = {['UI/UX','Анимации','Адаптивность']}
                     iconsClass = "fa-palette"
                     />

                    <Ellipse version = "synergy"/>
                    
                   <Card
                   version = "backend" 
                     title = "Backend Developer"
                     skills = {['API','Базы данных','Архитектура']}
                     iconsClass = "fa-server" 
                   />

                </div>

              <Button title = "Наши работы ↓" version = "hero"/>

            </div>
            <Arrow orientation = "down"/>
        </div>
        
    </section>
)
}
export default Hero