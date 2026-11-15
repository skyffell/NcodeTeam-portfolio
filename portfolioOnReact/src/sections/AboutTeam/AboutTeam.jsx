import SectionsHeader from "@components/SectionsHeader";
import StepsList from "./components/StepsList";
import styles from "./AboutTeam.module.scss";

function AboutTeam() {
    return (
        <section className={styles.aboutTeam} id="about">
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
