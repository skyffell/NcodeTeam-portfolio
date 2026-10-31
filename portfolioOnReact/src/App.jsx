import {AboutTeam, Contact, Footer, Hero, Projects, TechStack, WhyUs}  from './sections'
import Preloader from './components/Preloader'
function App(){
 return(
    <div>  

    <Preloader />
    
    <Hero />
    
    <AboutTeam />
    
    <TechStack />

    <Projects />
    
    <WhyUs />
    
    <Contact />

    <Footer />
    
    </div>
 )
}
export default App
