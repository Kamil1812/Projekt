import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

async function loginUser(credentials) {
    return fetch('http://localhost:3333/Login', {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'username': credentials.username,
            'password': credentials.password
        }
    }).then(res => res.json())
}

export default function LoginForm({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        })
        setToken(token)
    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
};