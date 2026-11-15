// Универсальный полиморфный компонент кнопки и ссылки
import Arrow from "./Arrow";
import styles from "./Button.module.scss";

function Button(props) {
    const {
        as,
        type = "button",
        href,
        title,
        text,
        children,
        version,
        variant,
        className = "",
        hasArrow = false,
        orientation = "down",
        onClick,
        disabled = false,
        ...rest
    } = props;

    // Контент кнопки: если переданы children, рендерим их напрямую,
    // иначе оборачиваем title / text в <span>
    const content = children ?? (title || text ? <span>{title ?? text}</span> : null);

    // Определяем базовый стиль кнопки
    const currentVariant = variant || version;
    const isFilter = currentVariant === "filter";
    const isProjectLink = currentVariant === "project-link";
    const isSocial = currentVariant === "social";
    const isClean = currentVariant === "clean" || currentVariant === "none";
    const isHero = currentVariant === "hero";

    let baseClass = styles.button;
    if (isHero) {
        baseClass = `${styles.button} ${styles.heroButton}`;
    } else if (isClean || isFilter || isProjectLink || isSocial) {
        baseClass = "";
    }

    const combinedClassName = `${baseClass} ${className}`.trim();

    // Определяем тег: ссылка или кнопка
    const isExplicitButton = as === "button" || type === "submit" || isFilter;
    const isExplicitLink = as === "a" || Boolean(href) || isProjectLink || isSocial || isClean;
    const isLink = isExplicitLink || (!isExplicitButton && !onClick);

    if (isLink) {
        return (
            <a
                href={href || "#projects"}
                className={combinedClassName || undefined}
                onClick={onClick}
                {...rest}
            >
                {content}
                {hasArrow && <Arrow orientation={orientation} />}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={combinedClassName || undefined}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {content}
            {hasArrow && <Arrow orientation={orientation} />}
        </button>
    );
}

export default Button;
