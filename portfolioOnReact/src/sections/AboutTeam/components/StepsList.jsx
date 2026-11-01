import Arrow from "../../../components/Arrow";
import Card from "../../../components/Card";

function StepsList() {
     return (

          <div className="workflow">

               <Card
                    version="step"
                    title="UI/UX дизайн"
                    text="Создаем интуитивные и современные интерфейсы"
                    skills={["Figma", "Adobe XD"]}
                    iconsClass="fa-pencil-ruler"
               />

               <Arrow orientation="right" />

               <Card
                    version="step"
                    title="Frontend разработка"
                    text="Чистый, семантический код с анимациями"
                    skills={["HTML5", "CSS3", "JavaScript"]}
                    iconsClass="fa-code"
               />

               <Arrow orientation="right" />

               <Card
                    version="step"
                    title="Backend Разработка"
                    text="Мощная серверная логика и API"
                    skills={["Python", "Flask", "FastAPI"]}
                    iconsClass="fa-cogs"
               />

               <Arrow orientation="right" />

               <Card
                    version="step"
                    title="Запуск"
                    text="Развертывание и поддержка проекта"
                    skills={["Docker", "CI/CD"]}
                    iconsClass="fa-rocket"
               />

          </div>
     )
}
export default StepsList