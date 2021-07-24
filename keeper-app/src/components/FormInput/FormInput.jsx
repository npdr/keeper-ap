import React from 'react';

export default function FormInput(props) {
    return (
        <div className="form-group input-group">
            <div className="input-group-prepend">
                <span className="input-group-text"> <i className={props.icon}></i> </span>
            </div>
            <input name="" className="form-control" placeholder={props.placeholder} type="text"></input>
        </div>
    )
}