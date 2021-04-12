import React from 'react';
import s from './Skills.module.css';
import sContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My skills</h2>
                <div className={s.skills}>
                    <Skill title={"HTML + CSS"} description={"bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla"}/>
                    <Skill title={"JS"} description={"bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla"}/>
                    <Skill title={"React"} description={"bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-bla"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
