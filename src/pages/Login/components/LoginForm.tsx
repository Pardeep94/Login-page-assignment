import React, { useEffect, useState } from 'react';

import EmailIcon from '../../../assets/icons/EmailIcon';
import LockIcon from '../../../assets/icons/LockIcon';
import Input from '../../../components/Input/input';
import corporateEmailRegex from '../../../utils/regex';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmailError('')
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
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (corporateEmailRegex.test(email)) {
        alert('Form submitted');
      }
      else{
        setEmailError("Please enter a valid corporate email id");
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
            <div className='flex'>
              <div className="w-1/4"></div>
              <div className="text-left text-zinc-700 mb-4 ">
                  <a href="#" className="text-sm underline">
                  Forgot password?
                  </a>
              </div>
            </div>

            {/* Remember Me Toggle */}
            <div className="flex items-center">
                <div className="w-1/4"></div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <div className="w-10 h-5 rounded-full shadow-inner bg-zinc-300"></div>
                  <div
                    className={`absolute w-4 h-4 bg-white ml-1 rounded-full shadow transition-transform duration-200 ease-in-out ${
                      rememberMe ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  ></div>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                </label>
                <span className="text-zinc-700 px-2">Remember me</span>
              </div>     
          </div>
          <div className="mt-4 text-center">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-zinc-700 text-white w-1/4 p-3 rounded font-semibold">
                        Log In
                </button>
            </div>
        </>
        
    );
    
};

export default LoginForm;