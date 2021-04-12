import React from 'react';
import s from './Main.module.css';
import sContainer from './../common/styles/Container.module.css'

function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.welcomeText}>
                    <span>Hi there</span>
                    <h1>I am Michael Perov</h1>
                    <p>Front-end developer</p>
                </div>
                <div className={s.welcomePhoto}></div>
            </div>
        </div>
    );
}

export default Main;
