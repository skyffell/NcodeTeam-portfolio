// Мокап окна терминала и ответа API в карточке проекта с эффектом печати
import TypewriterText from "@components/TypewriterText";
import styles from "./ProjectPreview.module.scss";

const ProjectPreview = (props) => {
    const { endpoint = "GET /api/users", response = '"users": [...]' } = props;
    return (
        <div className={styles.projectPreview}>
            <div className={styles.previewContent}>
                <div className={styles.browserBar}>
                    <div className={styles.browserDots}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={styles.previewScreen}>
                    <div className={styles.apiDemo}>
                        <div className={styles.endpoint}>
                            <TypewriterText text={endpoint} speed={25} delay={200} cursor={false} />
                        </div>
                        <div className={styles.response}>
                            <TypewriterText text={response} speed={15} delay={700} cursor={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPreview;
