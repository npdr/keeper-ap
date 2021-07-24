import React from 'react';
import './styles.css';

export default function LandingButton(props) {
    return (
        <p>{props.text} <button onClick={props.onClick} className="landing-button" >{props.buttonText}</button></p>
    );
}