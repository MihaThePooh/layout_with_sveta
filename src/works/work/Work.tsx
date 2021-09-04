import React from 'react';
import s from './Work.module.css';

type WorkPropsType = {
    title: string
    description: string
}

function Work(props: WorkPropsType) {
    return (
        <div className={s.work}>
            <div className={s.workPreview}>
                <div className={s.workPreviewButton}>Look</div>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}

export default Work;
