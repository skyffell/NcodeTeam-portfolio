import Arrow from "../../../components/Arrow";
import Card from "../../../components/Card";

function StepsList(){
    return(

         <div className="workflow">
                
                <Card 
                 version = "step" 
                     title = "UI/UX дизайн"
                     subTitle = "Создаем интуитивные и современные интерфейсы"
                     skills = {["Figma","Adobe XD"]}
                     iconsClass = "fa-pencil-ruler"
                />

                <Arrow orientation = "right"/>
                
                <Card 
                  version = "step" 
                     title = "Frontend разработка"
                     subTitle = "Чистый, семантический код с анимациями"
                     skills = {["HTML5","CSS3","JavaScript"]}
                     iconsClass = "fa-code"
                />
                
                <Arrow orientation = "right" />
                
                <Card 
                  version = "step" 
                     title = "Backend Разработка"
                     subTitle = "Мощная серверная логика и API "
                     skills = {["Python","Flask","FastAPI"]}
                     iconsClass = "fa-cogs"
                />
                
                <Arrow orientation = "right" />
                
                 <Card 
                   version = "step" 
                     title = "Запуск"
                     subTitle = "Развертывание и поддержка проекта"
                     skills = {["Docker","CI/CD"]}
                     iconsClass = "fa-rocket"
                 />
                 
            </div>
    )
}
export default StepsList