import React from 'react';
import Signup from '../../components/Signup/Signup.component';

import './SignupPage.style.scss';

const SignupPage = () => {
    return (
        <div className='page signup-page'>
            <div className='left'>
                <h2 className='title'>Signup</h2>
                <p className='description'>We do not share your personal details with anyone</p>
            </div>
            <div className='right'>
                <Signup />
            </div>
        </div>
    );
};

export default SignupPage;