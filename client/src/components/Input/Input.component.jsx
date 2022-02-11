import React from "react";

import './Input.style.scss';

const Input = ({type, label, value, handleChange, ...otherProps}) => {
    return (
        <div className='form-group'>
            <input
                className='form-input'
                type={type}
                onChange={handleChange}
                {...otherProps}
            />
            {
                label ? (
                    <label className={`${value?.length ? 'shrink' : ''} form-input-label`}>
                        {label}
                    </label>
                )
                : null
            }
        </div>
    );
}

export default Input;