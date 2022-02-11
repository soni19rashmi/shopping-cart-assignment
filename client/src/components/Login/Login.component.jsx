import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

import ActionButton from '../ActionButton/ActionButton.component';
import Input from '../Input/Input.component';

import './Login.style.scss';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate ();

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        navigate('/products'); 
        if (email.length && password.length) {
        }
    }

    return (
        <div className='log-in'>
            <form onSubmit={(event) => handleSubmit(event)}>
                <Input
                    type='email'
                    value={email}
                    onChange={handleEmailChange}
                    label='Email'
                    required
                />
                <Input
                    type='password'
                    value={password}
                    onChange={handlePasswordChange}
                    label='Password'
                    required
                />

                <ActionButton type='submit' className='login-button'>Login</ActionButton>
            </form>
        </div>
    );
};

export default Login;