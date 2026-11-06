import SectionsHeader from "../../components/SectionsHeader";
import StatsGrid from "./components/StatsGrid";
import TypingDemo from "./components/TypingDemo";
import WhyUsCard from "./components/WhyUsCard";
import Ellipse from "../../components/Ellipse";
import { comparisonData, statsData } from "../../data";

function WhyUs() {
    return (
        <section className="why-us" id="why">
            <div className="container">
                <SectionsHeader mainText="Почему N-code Team?" />

                <div className="comparison">
                    <WhyUsCard
                        version={comparisonData.solo.version}
                        title={comparisonData.solo.title}
                        texts={comparisonData.solo.texts}
                    />
                    <Ellipse title="VS" version="vs-circle" />
                    <WhyUsCard
                        version={comparisonData.team.version}
                        title={comparisonData.team.title}
                        texts={comparisonData.team.texts}
                    />
                </div>

                <StatsGrid items={statsData} />
            </div>

            <TypingDemo />
        </section>
    );
}

export default WhyUs;
