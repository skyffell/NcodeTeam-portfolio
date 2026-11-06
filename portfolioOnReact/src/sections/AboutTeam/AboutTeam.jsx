import SectionsHeader from "@components/SectionsHeader";
import StepsList from "./components/StepsList";

function AboutTeam() {
    return (
        <section className="about-team" id="about">
            <div className="container">
                <SectionsHeader
                    mainText="Наш рабочий процесс"
                    subText="Слаженная работа двух специалистов для достижения лучшего результата"
                />
                <StepsList />
            </div>
        </section>
    );
}

export default AboutTeam;
