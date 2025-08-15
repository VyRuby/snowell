
import ContactForm from "../../components/Ngoc/ContactForm";
import ContactInfo from "../../components/Ngoc/ContactInfo";
import Map from "../../components/Ngoc/ContactMap";

const title = {
    margin: '1rem 4rem ',
};

function ContactUs() {
    return (
        <>
                <div className="container my-5">
                    <h2 className="title">Contact Us</h2>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <ContactInfo />
                            <Map/>
                        </div>
                        <div className="col-md-6">
                            <ContactForm />
                        </div>
                    </div>
                </div>


         
        </>

    );
}
export default ContactUs;