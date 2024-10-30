import React, { useEffect, useState } from 'react';

import EmailIcon from '../../../assets/icons/EmailIcon';
import LockIcon from '../../../assets/icons/LockIcon';
import Input from '../../../components/Input/input';
import corporateEmailRegex from '../../../utils/regex';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmail(value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };

    const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (!corporateEmailRegex.test(value)) {
        setEmailError("Please enter a valid corporate email id");
      } else {
        setEmailError('');
      }
    };
    

    return (
        <>
        <div className="bg-white border border-black py-4 px-12 max-w-xl w-full justify-self-center">
            <Input
                type="email"
                label={'Email'}
                value={email}
                onChange={handleEmailChange}
                onBlur={validateEmail}
                placeholder={'Enter Your Email:'}
                iconLeft={<EmailIcon />}
                className='mb-4 flex items-center'
                error={emailError}
            />
            <Input
                type="password"
                label={'Password:'}
                value={password}
                onChange={handlePasswordChange}
                placeholder={'Enter Password'}
                iconLeft={<LockIcon />}
                togglePasswordVisibility
                className='mb-2 flex items-center'
            />
          </div>
        </>
        
    );
    
};

export default LoginForm;