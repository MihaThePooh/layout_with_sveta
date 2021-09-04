import React from 'react';
import s from './Footer.module.css';

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.footerSocial}>
                <a href="#">vk</a>
                <a href="#">linkedIn</a>
                <a href="#">telegram</a>
                <a href="#">inst</a>
            </div>
        </div>
    );
}

export default Footer;