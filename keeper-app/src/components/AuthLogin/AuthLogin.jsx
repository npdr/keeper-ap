import React from 'react';
import './styles.css';

export default function AuthLogin() {
    return (
        <div>
            <h4 className="card-title mt-3 text-center">Welcome!</h4>
            <p className="text-center">Start keeping your notes today</p>
            <p>
                <button className="btn btn-block btn-google"> <i className="fab fa-google"></i>   Login via Google</button>
            </p>
        </div>
    )
}