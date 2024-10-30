import React, { useEffect, useState } from 'react';

import EmailIcon from '../../../assets/icons/EmailIcon';
import LockIcon from '../../../assets/icons/LockIcon';
import Input from '../../../components/Input/input';
import corporateEmailRegex from '../../../utils/regex';
import isValidLanguageCode from '../../../utils/commonFunction';
import { LanguageCode } from '../../../utils/languageCodes';
import translations from '../../../utils/language';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [language, setLanguage] = useState<LanguageCode>('en');

    useEffect(() => {
      const browserLanguage = navigator.language.split('-')[0];
      if (isValidLanguageCode(browserLanguage)) {
        setLanguage(browserLanguage);
      } else {
        setLanguage('en');
      }
    }, []);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmailError('')
      setEmail(value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setLanguage(e.target.value as LanguageCode);
    };

    const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (!corporateEmailRegex.test(value)) {
        setEmailError(`${translations[language].emailError} `);
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
        setEmailError(`${translations[language].emailError} `);
      }
    };

    return (
        <>
        <div className="bg-white border border-black py-4 px-12 max-w-xl w-full justify-self-center">
            <Input
                type="email"
                label={translations[language].email}
                value={email}
                onChange={handleEmailChange}
                onBlur={validateEmail}
                placeholder={translations[language].emailPlaceholder}
                iconLeft={<EmailIcon />}
                className='mb-4 flex items-center'
                error={emailError && translations[language].emailError}
            />
            <Input
                type="password"
                label={translations[language].password}
                value={password}
                onChange={handlePasswordChange}
                placeholder={translations[language].passwordPlaceholder}
                iconLeft={<LockIcon />}
                togglePasswordVisibility
                className='mb-2 flex items-center'
            />
            <div className='flex'>
              <div className="w-1/4"></div>
              <div className="text-left text-zinc-700 mb-4 ">
                  <a href="#" className="text-sm underline">
                  {translations[language].forgetPassword}
                  </a>
              </div>
            </div>

            {/* Language Selection */}
            <div className="mb-4 flex items-center">
                        <label className="w-1/4 text-gray-700 font-semibold text-xl">
                            {translations[language].language}
                        </label>
                        <div className="relative flex-1">
                            <select
                                value={language}
                                onChange={handleLanguageChange}
                                className="w-full p-3 text-zinc-700 border-2 appearance-none border-gray-300 rounded focus:outline-none "
                            >
                                <option value="en">English</option>
                                <option value="hi">Hindi</option>
                                <option value="pa">Punjabi</option>
                            </select>
                            <span
                                className="absolute inset-y-0 right-2 flex items-center border-l-2 border-gray-300 pl-2 pr-1 text-gray-500 pointer-events-none"
                            >
                                ▼
                            </span>
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
                <span className="text-zinc-700 px-2">{translations[language].rememberMe}</span>
              </div>     
          </div>
          <div className="mt-4 text-center">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-zinc-700 text-white w-1/4 p-3 rounded font-semibold">
                        {translations[language].login}
                </button>
            </div>
        </>
        
    );
    
};

export default LoginForm;