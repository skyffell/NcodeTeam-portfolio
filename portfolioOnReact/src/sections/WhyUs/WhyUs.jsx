import SectionsHeader from "../../components/SectionsHeader"
import StatsGrid from "./components/StatsGrid"
import TypingDemo from "./components/TypingDemo"
import WhyUsCard from "./components/WhyUsCard"
import Ellipse from "../../components/Ellipse"

function WhyUs() {

    return (<section className="why-us" id="why">
        <div className="container">
            <SectionsHeader mainText="Почему N-code Team?" />

            <div className="comparison">
                <WhyUsCard
                    version="single"
                    title="Один разработчик"
                    texts={['Ограниченный стек технологий', 'Медленная разработка', 'Узкая специализация', 'Сложность масштабирования']} />
                <Ellipse title="VS" version="vs-circle" />
                <WhyUsCard
                    version="n-code-team"
                    title="Команда N-Code"
                    texts={['полный цикл разработки', 'Контроль качества на каждом этапе', 'Широкая экспертиза', 'Быстрое прототипирование']}
                />

            </div>

            <StatsGrid items={[
                { title: "Завершенных проектов", target: 12 },
                { title: "Строк кода", target: 50000 },
                { title: "API endpoints", target: 45 },
                { title: "Довольных клиентов", target: 8 }]} />

        </div>

        <TypingDemo />
    </section>)
}
export default WhyUs