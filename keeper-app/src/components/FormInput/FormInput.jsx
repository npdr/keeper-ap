import React, { useState } from 'react';

export default function FormInput(props) {
    const [userInput, setUserInput] = useState('');


    function handleChange(e) {
        const {name, value} = e.target;
        setUserInput({
            [name]: value
        });
    }
    return (
        <div onChange={handleChange} className="form-group input-group">
            <div className="input-group-prepend" value={userInput}>
                <span className="input-group-text"> <i className={props.icon}></i> </span>
            </div>
            <input name={props.name} className="form-control" placeholder={props.placeholder} type="text"></input>
        </div>
    )
}