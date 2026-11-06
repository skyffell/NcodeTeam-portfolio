const TeamAvailability = (props) => {
    const {
        isFree = true,
        freeText = "Свободны для новых проектов",
        busyText = "Заняты, скоро освободимся"
    } = props;

    return (
        <div className="team-availability">
            <div className={`status-indicator ${isFree ? "available" : "busy"}`}></div>
            <span>{isFree ? freeText : busyText}</span>
        </div>
    );
};

export default TeamAvailability;
