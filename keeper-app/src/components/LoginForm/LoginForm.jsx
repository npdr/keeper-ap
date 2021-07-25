import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import api from '../../services/api';
import { useHistory } from 'react-router';

export default function LoginForm(props) {
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
        console.log(user);
        api.post('/auth/authenticate', user).then(() => {
            history.push('/notes');
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormInput handleUserInput={handleUserInput} icon="fa fa-envelope" name="email" type="text" placeholder="Email Address" />
            <FormInput handleUserInput={handleUserInput} icon="fa fa-lock" name="password" type="password" placeholder="Password" />

            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block"> Sign In  </button>
            </div>
        </form>
    )
}