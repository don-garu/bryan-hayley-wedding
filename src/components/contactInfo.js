import contactData from '../assets/contact_data.json'
import { ReactComponent as PhoneCall } from '../assets/phone-fill.svg'
import { ReactComponent as Message } from '../assets/mail-line.svg'

const ContactInfo = () => {
    return <div className="contact-info">
        <div className='contact-info-block'>
            <div className='contact-info-header'>신랑측</div>
            <div className='contact-info-body'>
                <div className='contact-info-name'>신랑 {contactData.groom.name}</div>
                <a href={`tel:${contactData.groom.number}`}><PhoneCall width='15' height='15'/></a>
                <a href={`sms:${contactData.groom.number}`}><Message width='15' height='15'/></a>
            </div>
            <div className='contact-info-body'>
                <div className='contact-info-name'>아버지 {contactData.groom.father.name}</div>
                <a href={`tel:${contactData.groom.father.number}`}><PhoneCall width='15' height='15'/></a>
                <a href={`sms:${contactData.groom.father.number}`}><Message width='15' height='15'/></a>
            </div>
            <div className='contact-info-body'>
                <div className='contact-info-name'>어머니 {contactData.groom.mother.name}</div>
                <a href={`tel:${contactData.groom.mother.number}`}><PhoneCall width='15' height='15'/></a>
                <a href={`sms:${contactData.groom.mother.number}`}><Message width='15' height='15'/></a>
            </div>
        </div>
        <div className='contact-info-block'>
            <div className='contact-info-header'>신부측</div>
            <div className='contact-info-body'>
                <div className='contact-info-name'>신부 {contactData.bride.name}</div>
                <a href={`tel:${contactData.bride.number}`}><PhoneCall width='15' height='15'/></a>
                <a href={`sms:${contactData.bride.number}`}><Message width='15' height='15'/></a>
            </div>
            <div className='contact-info-body'>
                <div className='contact-info-name'>아버지 {contactData.bride.father.name}</div>
                <a href={`tel:${contactData.bride.father.number}`}><PhoneCall width='15' height='15'/></a>
                <a href={`sms:${contactData.bride.father.number}`}><Message width='15' height='15'/></a>
            </div>
            <div className='contact-info-body'>
                <div className='contact-info-name'>어머니 {contactData.bride.mother.name}</div>
                <a href={`tel:${contactData.bride.mother.number}`}><PhoneCall width='15' height='15'/></a>
                <a href={`sms:${contactData.bride.mother.number}`}><Message width='15' height='15'/></a>
            </div>
        </div>
    </div>
}

export default ContactInfo;
