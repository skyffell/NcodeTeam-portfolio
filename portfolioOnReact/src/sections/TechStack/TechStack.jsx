import SectionsHeader from "../../components/SectionsHeader";
import StackCard from "./components/StackCard";
import { techStackData } from "../../data";

function TechStack({ categories = techStackData }) {
    return (
        <section className="tech-stack" id="tech">
            <div className="container">
                <SectionsHeader mainText="Наш стек технологий" />

                <div className="stack-container">
                    {categories.map((category) => (
                        <StackCard
                            key={category.id}
                            version={category.version}
                            iconsClass={category.iconsClass}
                            title={category.title}
                            items={category.items}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechStack;
