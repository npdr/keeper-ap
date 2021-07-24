import React from 'react';
import FormInput from '../FormInput/FormInput';

export default function RegisterForm() {
    return (
        <form>
            <FormInput icon="fa fa-user" placeholder="Full Name" />
            <FormInput icon="fa fa-envelope" placeholder="Email Address" />
            <FormInput icon="fa fa-lock" placeholder="Password" />
            <FormInput icon="fa fa-lock" placeholder="Repeat Password" />

            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
            </div>          
        </form>
    )
}