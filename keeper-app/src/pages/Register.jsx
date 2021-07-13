import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AccountForm from '../components/AccountForm/AccountForm';

function Register() {
    return (
        <div>
            <Header />
            <AccountForm
                action="register"
                header="Register" 
            />
            <Footer />
        </div>
    );
}

export default Register;