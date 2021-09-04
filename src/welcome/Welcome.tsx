import React from 'react';
import s from './Welcome.module.css';

function Welcome() {
    return (
        <div className={s.welcome}>
            <div className={s.welcomeText}>
                <span>Hi there</span>
                <h1>I am Michael Perov</h1>
                <p>Front-end developer</p>
            </div>
            <div className={s.welcomePhoto}>photo</div>
        </div>
    );
}

export default Welcome;
