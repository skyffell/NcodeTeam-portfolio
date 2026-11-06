import Arrow from "../../components/Arrow"
import Button from "../../components/Button"
import Card from "../../components/Card"
import Ellipse from "../../components/Ellipse"
import SectionsHeader from "../../components/SectionsHeader"
function Hero() {

  return (
    <section className="hero" id="home">
      <div className="binary-background"></div>
      <div className="container">
        <div className="team-presentation">

          <SectionsHeader
            mainText="N-CODE TEAM"
            subText="От пикселя до API - создаем цифровые решения под ключ"
            isHero={true}
          />

          <div className="developer-cards">
            <Card
              version="frontend"
              title="Frontend Developer"
              text="HTML5, CSS3, JavaScript"
              skills={['UI/UX', 'Анимации', 'Адаптивность']}
              iconsClass="fa-palette"
            />

            <Ellipse version="synergy" title="Синергия" hasPulse={true} />

            <Card
              version="backend"
              title="Backend Developer"
              text="Python, Flask, FastAPI"
              skills={['API', 'Базы данных', 'Архитектура']}
              iconsClass="fa-server"
            />
          </div>

          <Button title="Наши работы " version="hero" />

        </div>
        <Arrow orientation="down" className="scroll-indicator" />
      </div>

    </section>
  )
}
export default Hero