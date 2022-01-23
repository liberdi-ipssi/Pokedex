import { useModal } from "contexts/Modal";
import { useRef } from "react";

import "styles/Main.scss";

import emailjs from '@emailjs/browser';


const HomeContainer = () => {
    const { setModal } = useModal();
    const form = useRef();
    localStorage.setItem("fav", JSON.stringify([]));

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const templateId = "template_v0pzt68";
        const serviceId = "service_z09qfqf";
        const userId = "user_gCv9vxrNiM8MfOSwTyoAv";
        
        sendMessage(serviceId, templateId, userId);
    }

    const sendMessage = (serviceId, templateId, userId) => {
        
        emailjs.sendForm(serviceId, templateId, form.current, userId)
        .then(res => {
            console.log(`L'email a bien été envoyé`)
        })
        .catch(err => console.error('Une erreur est survenu :', err))
    };

    return (
        <div className="Home">
        <header className="Home-header">
            <label
            className="Home"
            onClick={() => {
                setModal(<div className="formMail">
                    <form ref={form} onSubmit={handleSubmit}>      
                    <input type="text" name="from_name" className="feedback-input" placeholder="Name" />   
                    <input type="email" name="reply_to" className="feedback-input" placeholder="Email" />
                    <textarea name="message" className="feedback-input" placeholder="Comment"></textarea>
                    <input type="submit" value="Send"/>
                  </form>
                  </div>)
            }}
            >
            <button className="SubmitType">Send an email</button>
            </label>
        </header>
        </div>
    );
}

export default HomeContainer;