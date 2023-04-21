import React from 'react';
import s from './SuperButton.module.css'

type ButtonType = {
    name: string
}

const SuperButton = (props: ButtonType) => {
    return (
        <div className={s.buttonContainer}>
            <button className={s.button}>{props.name}</button>
        </div>
    );
};

export default SuperButton;