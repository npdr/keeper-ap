import React from 'react';

import api from "../../services/api";

import './styles.css';

function AccountForm(props) {

    function handleSubmit(e) {
        e.preventDefault();

        api.post(props.route).then(() => {
            alert("posted to " + props.route);
        }).catch((err) => {
            alert(err);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="account-form">
                <div className="account-form-header">
                    <h1>{props.header}</h1>
                </div>
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Password" />
                <button>Ok</button>
            </form>
        </div>
    );
}

export default AccountForm;