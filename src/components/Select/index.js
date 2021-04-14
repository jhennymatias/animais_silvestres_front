import React from 'react';
import './styles.css';

const Select = ({ label, id, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={id}> {label}
                <select value="" id={id} {...rest}>
                    <option value="" disabled hidden >Selecione</option>
                    {options.map(option => {
                        return <option key={option.value} value={option.value}>{option.label}</option>
                    })}
                </select>
            </label>
        </div>
    );
}

export default Select;