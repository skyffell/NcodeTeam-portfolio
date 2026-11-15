// Подвал сайта с логотипом, ссылками и копирайтом
import NCodeLogo from "@components/NCodeLogo";
import SectionsHeader from "@components/SectionsHeader";
import FooterLinks from "./components/FooterLinks";
import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <NCodeLogo />
                    <SectionsHeader subText="Fullstack разработка на Python и JavaScript" />
                    <FooterLinks title={["Главная", "О нас", "Проекты", "Контакты"]} />
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; 2025 N-code Team. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
