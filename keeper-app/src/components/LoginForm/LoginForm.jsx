import React from 'react';
import FormInput from '../FormInput/FormInput';

export default function LoginForm(props) {
    return (
        <form>
            <FormInput icon="fa fa-envelope" placeholder="Email Address" />
            <FormInput icon="fa fa-lock" placeholder="Password" />

            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block"> Sign In  </button>
            </div>            
        </form>
    )
}