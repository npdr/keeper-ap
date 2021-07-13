import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountForm from '../components/AccountForm/AccountForm';

function Login() {
    return (
        <div>
            <Header />
            <AccountForm
                route="login"
                header="Login"
            />
            <Footer />
        </div>
    );
}

export default Login;