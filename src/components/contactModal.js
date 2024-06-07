import ContactInfo from "./contactInfo";

const ContactModal = ({setClicked}) => {
    const dismiss = (e) => {
        if (e.target.classList.contains("dismiss")) {
            setClicked(null);
            document.body.style.overflow = '';
        }
    }

    return <div className="overlay dismiss" onClick={dismiss}>
        <div className="contact-popup">
            <ContactInfo/>
            <div className="contact-popup-close dismiss" onClick={dismiss}>닫기</div>
        </div>
    </div>
}

export default ContactModal;
