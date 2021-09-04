import React from 'react';
import s from './Works.module.css';
import Work from "./work/Work";

function Works() {
    return (
        <div className={s.works}>
            <h2>My works</h2>
            <div className={s.worksItem}>
                <Work title={"Social Network"} description={"Short descriptionddddddd ddddddddddddddd dddddddddddddddddddddddddd dddddddddddddd ddddddddddddddd ddddddddd"}/>
                <Work title={"Todolist"} description={"Short description"}/>
                <Work title={"Todolist"} description={"Short description"}/>
            </div>
        </div>
    );
}

export default Works;
