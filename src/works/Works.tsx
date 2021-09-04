import React from 'react';
import s from './Works.module.css';
import Work from "./work/Work";

function Works() {
    return (
        <div className={s.works}>
            <h2>My works</h2>
            <div className={s.works}>
                <Work title={"Social Network"} description={"Short description"}/>
                <Work title={"Todolist"} description={"Short description"}/>
            </div>
        </div>
    );
}

export default Works;
