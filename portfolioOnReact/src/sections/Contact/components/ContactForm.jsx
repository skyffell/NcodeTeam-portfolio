import Button from "../../../components/Button"
import FormContactInput from "./FormContactInput"

const ContactForm = () =>{
    return(
         <div className="contact-form">
                    <form id="project-form">
                        <FormContactInput />
                        
                        <FormContactInput />
                        
                        <FormContactInput />
                        
                        <FormContactInput />
                        
                        <Button />

                    </form>
                </div>
    )
}
export default ContactForm