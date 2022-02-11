import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

import ActionButton from '../ActionButton/ActionButton.component';
import Input from '../Input/Input.component';

import './Signup.style.scss';

const Signup = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const navigate = useNavigate ();

    function handleChange(event, type) {
        const value = event.target.value;
        switch (type) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'firstName':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
        
            default:
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (email.length && password.length) {
            navigate('/login'); 
        }
    }

    return(
        <div className='signup'>
            <form onSubmit={(event) => handleSubmit(event)}>
                <Input
                    type='text'
                    value={firstName}
                    onChange={(e) => handleChange(e, 'firstName')}
                    label='First Name'
                />
                <Input
                    type='text'
                    value={lastName}
                    onChange={(e) => handleChange(e, 'lastName')}
                    label='Last Name'
                />
                <Input
                    type='email'
                    value={email}
                    onChange={(e) => handleChange(e, 'email')}
                    label='Email'
                    required
                />
                <Input
                    type='password'
                    value={password}
                    onChange={(e) => handleChange(e, 'password')}
                    label='Password'
                    required
                />
                <Input
                    type='password'
                    value={confirmPassword}
                    onChange={(e) => handleChange(e, 'confirmPassword')}
                    label='Confirm Password'
                    required
                />

                <ActionButton type='submit' className='signup-button'>Login</ActionButton>
            </form>
        </div>
    );
};

export default Signup;