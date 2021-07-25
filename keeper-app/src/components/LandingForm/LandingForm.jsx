import React, { useState } from 'react';
import AuthLogin from '../AuthLogin/AuthLogin';
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';
import LandingButton from '../LandingButton/LandingButton';

import './styles.css';

function LandingForm(props) {
    const [hasAccount, setHasAccount] = useState(false);

    function handleClick() {
        setHasAccount(!hasAccount);
    }

    return (
        <div className="container card">
            <article className="card-body mx-auto">
                <AuthLogin />
                {hasAccount ? <LoginForm /> : <RegisterForm />}

                <LandingButton
                    onClick={handleClick}
                    text={hasAccount ? "" : "Have an account?"}
                    buttonText={hasAccount ? "Back" : "Log In"}
                />

            </article>
        </div>



    );
}

export default LandingForm;