import { useModal } from "contexts/Modal";
import { useState, useRef } from "react";

import "styles/Main.css";

import emailjs from '@emailjs/browser';


const HomeContainer = () => {
    const { setModal } = useModal();
    const form = useRef();
    const [msg, setMsg] = useState();
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
        <div className="App">
        <header className="App-header">
            <label
            className="App-link"
            onClick={() => {
                setModal(<form ref={form} onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="from_name" />
                    <label>Email</label>
                    <input type="email" name="reply_to" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
                )
            }}
            >
            Envoyer un mail
            </label>
        </header>
        </div>
    );
}

export default HomeContainer;