import SectionsHeader from "../../components/SectionsHeader"
import StackCard from "./components/StackCard"

function TechStack() {
    return (
        <section className="tech-stack" id="tech">
            <div className="container">

                <SectionsHeader mainText="Наш стек технологий" />

                <div className="stack-container">

                    <StackCard
                        version="frontend"
                        iconsClass="fas fa-desktop"
                        title="Frontend"
                        items={[
                            {
                                title: "HTML5",
                                iconsClass: "fab fa-html5",
                                level: "90",
                                dataTech: "html"
                            },
                            {
                                title: "CSS3",
                                iconsClass: "fab fa-css3-alt",
                                level: "87",
                                dataTech: "css"
                            },
                            {
                                title: "JavaScript",
                                iconsClass: "fab fa-js",
                                level: "86",
                                dataTech: "js"
                            },
                            {
                                title: "React",
                                iconsClass: "fab fa-react",
                                level: "86",
                                dataTech: "react"
                            },
                        ]}
                    />

                    <StackCard
                        version="backend"
                        iconsClass="fas fa-server"
                        title="Backend"
                        items={[
                            {
                                title: "Python",
                                iconsClass: "fab fa-python",
                                level: "87",
                                dataTech: "python"
                            },
                            {
                                title: "Flask",
                                iconsClass: "fas fa-flask",
                                level: "90",
                                dataTech: "flask"
                            },
                            {
                                title: "FastAPI",
                                iconsClass: "fas fa-bolt",
                                level: "86",
                                dataTech: "fastapi"
                            },
                            {
                                title: "Django",
                                iconsClass: "fab fa-django",
                                level: "86",
                                dataTech: "django"
                            },
                        ]}
                    />

                </div>
            </div>
        </section>
    )
}

export default TechStack