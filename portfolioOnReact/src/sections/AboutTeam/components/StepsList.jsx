import React from "react";
import Arrow from "../../../components/Arrow";
import Card from "../../../components/Card";
import { workflowData } from "../../../data";

function StepsList({ steps = workflowData }) {
    return (
        <div className="workflow">
            {steps.map((step, index) => (
                <React.Fragment key={step.id || step.title || index}>
                    <Card
                        version="step"
                        title={step.title}
                        text={step.text}
                        skills={step.skills}
                        iconsClass={step.iconsClass}
                    />
                    {index < steps.length - 1 && <Arrow orientation="right" />}
                </React.Fragment>
            ))}
        </div>
    );
}

export default StepsList;
