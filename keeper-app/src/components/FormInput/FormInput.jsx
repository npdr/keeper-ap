import React, { useState } from 'react';

export default function FormInput(props) {
    const [userInput, setUserInput] = useState('');

    function handleChange(e) {
        const { name, value } = e.target;
        setUserInput(value);
        props.handleUserInput(name, value);
    }

    return (
        <div className="form-group input-group">
            <div className="input-group-prepend">
                <span className="input-group-text"> <i className={props.icon}></i> </span>
            </div>
            <input onChange={handleChange} name={props.name} value={userInput} className="form-control" placeholder={props.placeholder} type="text"></input>
        </div>
    )
}