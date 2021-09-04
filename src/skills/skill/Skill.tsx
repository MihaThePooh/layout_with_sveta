import React from 'react';
import s from './Skill.module.css';

type SkillPropsType = {
    title: string
    description: string
}

function Skill(props: SkillPropsType) {
    const text = " asdj ghdjb alijkf asdj ghdjbalijkf asdjghdjb alijkfasdjg hdjbali jkfasdjgh djbalijk fasdjghdjbalij kfasdjghdjbal ijkfasd jghdjbalijkfasdjgh djbalijkf"
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description + text}</span>
        </div>
    );
}

export default Skill;
