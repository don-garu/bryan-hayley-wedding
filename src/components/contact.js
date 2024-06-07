import { useState } from "react";
import ContactModal from "./contactModal";

const Contact = () => {
    const [clicked, setClicked] = useState(null);

    const contactClick = () => {
        document.body.style.overflowY = 'hidden'
        setClicked('123')
    };

    return <div className='contact-section'>
        <div className='contact-section-btn'
             onClick={() => contactClick()}>
            연락처 확인하기
        </div>
        {clicked && <ContactModal
            setClicked={setClicked}/>}
    </div>
}

export default Contact;
