import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

export default function RegisterForm() {
    const history = useHistory();

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
        api.post('/auth/register', user).then((res) => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            history.push('/notes');
        });
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <FormInput handleUserInput={handleUserInput} icon="fa fa-user" name="name" type="text" placeholder="Full Name" />
            <FormInput handleUserInput={handleUserInput} icon="fa fa-envelope" name="email" type="text" placeholder="Email Address" />
            <FormInput handleUserInput={handleUserInput} icon="fa fa-lock" name="password" type="password" placeholder="Password" />

            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
            </div>          
        </form>
    )
}