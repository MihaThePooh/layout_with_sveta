import React from 'react';
import s from './Contact.module.css';

function Contact() {
    return (
        <div className={s.contact}>
            <h3>Contact</h3>
                <form className={s.form}>
                    <input type="text" placeholder="name"/>
                    <input type="text" placeholder="email"/>
                    <input type="textarea" placeholder="message"/>
                    <button>Send</button>
                </form>
        </div>
    );
}

export default Contact;
