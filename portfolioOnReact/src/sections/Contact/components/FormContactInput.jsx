const FormContactInput = ({
    label,
    type = "text",
    name,
    id,
    placeholder = "",
    required = false,
    options = [],
    rows = 4
}) => {
    const inputId = id || name || (label ? label.toLowerCase().replace(/[^a-zа-я0-9]/gi, "_") : "field");

    const renderField = () => {
        if (type === "textarea") {
            return (
                <textarea
                    id={inputId}
                    name={name || inputId}
                    rows={rows}
                    placeholder={placeholder}
                    required={required}
                />
            );
        }

        if (type === "select") {
            return (
                <select id={inputId} name={name || inputId} required={required} defaultValue="">
                    <option value="" disabled>
                        Выберите тип проекта...
                    </option>
                    {options.map((opt, idx) => {
                        const val = typeof opt === "object" ? opt.value : opt;
                        const text = typeof opt === "object" ? opt.label : opt;
                        return (
                            <option key={val || idx} value={val}>
                                {text}
                            </option>
                        );
                    })}
                </select>
            );
        }

        return (
            <input
                type={type || "text"}
                id={inputId}
                name={name || inputId}
                placeholder={placeholder}
                required={required}
            />
        );
    };

    return (
        <div className="form-group">
            {label && <label htmlFor={inputId}>{label}</label>}
            {renderField()}
        </div>
    );
};

export default FormContactInput;
