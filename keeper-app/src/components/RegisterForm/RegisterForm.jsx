import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';

export default function RegisterForm() {
    const [user, setUser] = useState({});

    function handleUserInput(name, userInput) {
        setUser(prevUser => {
            return {
                ...prevUser,
                [name]: userInput
            };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        //register user
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormInput handleUserInput={handleUserInput} icon="fa fa-user" name="fname" placeholder="Full Name" />
            <FormInput handleUserInput={handleUserInput} icon="fa fa-envelope" name="email" placeholder="Email Address" />
            <FormInput handleUserInput={handleUserInput} icon="fa fa-lock" name="password" placeholder="Password" />

            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
            </div>          
        </form>
    )
}