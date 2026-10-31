import SectionsHeader from "../../components/SectionsHeader"
import StatsGrid from "./components/StatsGrid"
import TypingDemo from "./components/TypingDemo"
import WhyUsCard from "./components/WhyUsCard"

function WhyUs() {

    return(<section className="why-us" id="why">
        <div className="container">
            <SectionsHeader mainText = "Почему N-code Team?"/>
            
            <div className="comparison">
                <WhyUsCard 
                version = "single" 
                titles = {['Ограниченный стек технологий','Медленная разработка','Узкая специализация','Сложность масштабирования']}/>
                
                <div className="vs-circle">
                    VS
                </div>
                
                <WhyUsCard 
                version = "n-code-team"
                titles = {['полный цикл разработки','Контроль качества на каждом этапе','Широкая экспертиза','Быстрое прототипирование']}
                />

            </div>
            
            <StatsGrid mainTexts = {['','','','']} subTexts = {['','','','']}/>
            
        </div>
   
        <TypingDemo />
    </section>)
}
export default WhyUs