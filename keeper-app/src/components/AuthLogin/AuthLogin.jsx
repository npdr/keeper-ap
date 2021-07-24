import React from 'react';
import './styles.css';

export default function AuthLogin() {
    return (
        <div>
            <h4 className="card-title mt-3 text-center">Create Account</h4>
            <p className="text-center">Get started with your free account</p>
            <p>
                <button className="btn btn-block btn-twitter"> <i className="fab fa-twitter"></i>   Login via Twitter</button>
                <button className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f"></i>   Login via facebook</button>
            </p>
        </div>
    )
}