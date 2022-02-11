import React, { useState } from 'react';

import Login from '../../components/Login/Login.component';

import './LoginPage.style.scss';

const LoginPage = () => {
    return (
        <div className="page login-page">
            <div className="left">
                <h2 className='title'>Login</h2>
                <p className='description'>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className='right'>
                <Login />
            </div>
        </div>
    );
};

export default LoginPage;