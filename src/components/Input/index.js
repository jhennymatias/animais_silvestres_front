import React from 'react';
import './styles.css';

const Input = ({ label, id, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={id}> {label}
                <input type="text" id={id} {...rest} />
            </label>
        </div>
    );
}

export default Input;