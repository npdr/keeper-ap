import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';

export default function LoginForm(props) {
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
        console.log(user);
        //register user
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormInput handleUserInput={handleUserInput} icon="fa fa-envelope" name="email" placeholder="Email Address" />
            <FormInput handleUserInput={handleUserInput} icon="fa fa-lock" name="password" placeholder="Password" />

            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block"> Sign In  </button>
            </div>
        </form>
    )
}