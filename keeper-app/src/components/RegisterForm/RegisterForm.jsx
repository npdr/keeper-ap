import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';

export default function RegisterForm() {
    const [userFName, setUserFName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [user, setUser] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);

        setUser({
            fname: 'a'
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormInput icon="fa fa-user" name="fname" placeholder="Full Name" />
            <FormInput icon="fa fa-envelope" name="email" placeholder="Email Address" />
            <FormInput icon="fa fa-lock" name="password" placeholder="Password" />

            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
            </div>          
        </form>
    )
}