import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
            .then(res => res.json())
            .then(data => {
                if (data.token)
                {
                    localStorage.setItem('user', JSON.stringify(data));
                    navigate('/profile');
                }
                else
                {
                    setError(data.message || 'Login failed');
                }
            })
            .catch(err => setError('An error occurred'));
    };

    return (
        <div className="login-container">
            <p id="top">Welcome back! 👋</p>
            <h2>Sign in to your account</h2>
            <label htmlFor="username">Your username</label>
            <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}><strong>CONTINUE</strong></button>
            <div id="bottom">
                <a href="">Forget your password?</a>
            </div>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;