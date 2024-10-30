import React, { ChangeEvent, useState } from 'react';
import EyeSlashIcon from '../../assets/icons/EyeSlashIcon';
import EyeIcon from '../../assets/icons/EyeIcon';


interface InputProps {
  type: 'text' | 'email' | 'password';
  label?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  iconLeft?: React.ReactNode; 
  iconRight?: React.ReactNode;
  togglePasswordVisibility?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  value,
  onChange,
  placeholder,
  iconLeft,
  iconRight,
  togglePasswordVisibility = false,
  className = '',
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${className}`}>
      {label && <label className="w-1/4 text-xl text-gray-700 font-semibold">{label}</label>}
      
      <div className="flex-1">
        <div className='relative'>
            {iconLeft && (
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                {iconLeft}
            </span>
            )}
            <input
            type={togglePasswordVisibility && showPassword ? 'text' : type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full text-zinc-700  p-3 ${iconLeft ? 'pl-10' : 'pl-3'} ${iconRight ? 'pr-10' : 'pr-3'} border-2 rounded focus:outline-none`}
            />
            {togglePasswordVisibility && type === 'password' && (
            <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
            >
                {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            </button>
            )}
            
            {iconRight && !togglePasswordVisibility && (
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                {iconRight}
            </span>
            )}
        </div>
      

      </div>
      
    </div>
  );
};

export default Input;
