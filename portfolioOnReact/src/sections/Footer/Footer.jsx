import NCodeLogo from "@components/NCodeLogo";
import SectionsHeader from "@components/SectionsHeader";
import FooterLinks from "./components/FooterLinks";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <NCodeLogo />
                    <SectionsHeader subText="Fullstack разработка на Python и JavaScript" />
                    <FooterLinks title={["Главная", "О нас", "Проекты", "Контакты"]} />
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 N-code Team. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
