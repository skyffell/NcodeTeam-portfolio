import SectoinsHeader from "../../components/SectionsHeader"
import ContactForm from "./components/ContactForm"
import ContactMethod from "./components/ContactMethods"
import LinkList from "./components/LinkList"

function Contact(){
    return(
    <section class="contact" id="contact">
        <div class="container">
            <div class="contact-content">
                <div class="contact-info">
                  <SectoinsHeader mainText = "НАчнем проект вместе?" />
                   
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