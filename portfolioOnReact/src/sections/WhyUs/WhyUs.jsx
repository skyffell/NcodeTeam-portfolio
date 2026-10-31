import SectoinsHeader from "../../components/SectionsHeader"
import StatsGrid from "./components/StatsGrid"
import TypingDemo from "./components/TypingDemo"
import WhyUsCard from "./components/WhyUsCard"

function WhyUs() {

    return(<section class="why-us" id="why">
        <div class="container">
            <SectoinsHeader mainText = "Почему N-code Team?"/>
            
            <div class="comparison">
                <WhyUsCard 
                version = "single" 
                titles = {['Ограниченный стек технологий','Медленная разработка','Узкая специализация','Сложность масштабирования']}/>
                
                <div class="vs-circle">
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