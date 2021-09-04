import React from 'react';
import s from './Skills.module.css';
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={s.skills}>
            <h2>My skills</h2>
            <div className={s.skillsItems}>
                <Skill title={"HTML + CSS"} description={"Short description"}/>
                <Skill title={"JS"} description={"Short description"}/>
                <Skill title={"React"} description={"Short description"}/>
                <Skill title={"React"} description={"Short description"}/>
                <Skill title={"React"} description={"Short description"}/>
                <Skill title={"React"} description={"Short description"}/>
            </div>
        </div>
    );
}

export default Skills;
