// Фиксированная навигационная панель с поддержкой мобильного меню и анимациями
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NCodeLogo from "./NCodeLogo";
import Button from "./Button";
import styles from "./Header.module.scss";

const navLinks = [
    { title: "Главная", href: "#home" },
    { title: "О нас", href: "#about" },
    { title: "Стек", href: "#tech" },
    { title: "Проекты", href: "#projects" },
    { title: "Почему мы", href: "#why" },
    { title: "Контакты", href: "#contact" }
];

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Отслеживание позиции скролла для изменения фона шапки
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`.trim()}>
            <div className={`container ${styles.navContainer}`}>
                <a href="#home" className={styles.logoLink} onClick={closeMobileMenu}>
                    <NCodeLogo />
                </a>

                {/* Навигация для десктопа */}
                <nav>
                    <ul className={styles.navLinks}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className={styles.navLink}>
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.headerActions}>
                    <Button
                        as="a"
                        href="#contact"
                        title="Связаться"
                        className={styles.contactBtn}
                    />
                </div>

                {/* Кнопка открытия мобильного меню */}
                <button
                    type="button"
                    className={styles.burgerBtn}
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    aria-label="Переключить меню навигации"
                >
                    <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
                </button>
            </div>

            {/* Выпадающее мобильное меню с плавной анимацией */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={closeMobileMenu}
                            >
                                {link.title}
                            </a>
                        ))}
                        <Button
                            as="a"
                            href="#contact"
                            title="Связаться с нами"
                            className={styles.mobileContactBtn}
                            onClick={closeMobileMenu}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;
