import React from 'react';
import s from './SuperInput.module.css'

type InputType = {
    placeholder: string
    label: string
}

const SuperInput = (props: InputType) => {
    return (
        <div className={s.formGroup}>
            <input type="input"
                   className={s.formField}
                   name="name"
                   id='name'
                   required
            />
            <label htmlFor="name"
                   className={s.formLabel}
            >{props.label}
            </label>
        </div>
    );
};

export default SuperInput;