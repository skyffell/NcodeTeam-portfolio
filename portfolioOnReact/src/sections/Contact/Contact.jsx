import SectionsHeader from "@components/SectionsHeader";
import ContactForm from "./components/ContactForm";
import ContactMethods from "./components/ContactMethods";
import LinkList from "./components/LinkList";
import TeamAvailability from "./components/TeamAvailability";
import {
    availabilityData,
    contactMethodsData,
    socialLinksData,
    contactFormFieldsData
} from "@data";

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info">
                        <SectionsHeader mainText="Начнем проект вместе?" />

                        <TeamAvailability {...availabilityData} />

                        <ContactMethods items={contactMethodsData} />

                        <LinkList links={socialLinksData} />
                    </div>

                    <ContactForm
                        fields={contactFormFieldsData}
                        buttonTitle="Обсудить проект"
                    />
                </div>
            </div>
        </section>
    );
}

export default Contact;
