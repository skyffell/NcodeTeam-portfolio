import SectionsHeader from "../../components/SectionsHeader"
import ContactForm from "./components/ContactForm"
import ContactMethod from "./components/ContacMethod"
import ContactMethods from "./components/ContactMethods"
import LinkList from "./components/LinkList"

function Contact(){
    return(
    <section className="contact" id="contact">
        <div className="container">
            <div className="contact-content">
                <div className="contact-info">
                  <SectionsHeader mainText = "НАчнем проект вместе?" />
                   
                   <ContactMethod iconsClass= '' version = '' title = "Сводобны для новых проектов" />
                    
                   <ContactMethods iconsClass= {['','','']} versions = {['','','']} titles = {['N-codeTeam@gmail.com','+375(44)7517869','@skyffell']}/>
                    
                 <LinkList iconsClass = {['','','']}/> 
                 </div>
                
               <ContactForm 
               inputTitle = {['Ваш проект похож на: ','Ваше имя','Email','Опишите ваш проект']} 
               inputType = {['','','','']} 
               buttonTitle = 'Обсудить проект'
               />
                              
            </div>
        </div>
    </section>)
}
export default Contact