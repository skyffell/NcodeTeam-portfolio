// Главный компонент приложения N-code Team Portfolio
import { AboutTeam, Contact, Footer, Hero, Projects, TechStack, WhyUs } from "@sections";
import Header from "@components/Header";
import Preloader from "@components/Preloader";

function App() {
    return (
        <div>
            <Preloader />
            <Header />
            <Hero />
            <AboutTeam />
            <TechStack />
            <Projects />
            <WhyUs />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
