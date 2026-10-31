import NCodeLogo from "../../components/NCodeLogo"
import SectoinsHeader from "../../components/SectionsHeader"
import FooterLinks from "./components/FooterLinks"

function Footer(){
    return(
        <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <NCodeLogo />

                <SectoinsHeader subText = 'Fullstack разработка на Python и JavaScript'/>
               
               <FooterLinks title = {['Главная','О нас','Проекты','Контакты']}/>
               
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 N-code Team. Все права защищены.</p>
            </div>
        </div>
    </footer>
    )
}
export default Footer