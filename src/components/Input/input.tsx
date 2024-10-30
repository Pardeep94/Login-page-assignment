import React, { ChangeEvent, useState } from 'react';
import EyeSlashIcon from '../../assets/icons/EyeSlashIcon';
import EyeIcon from '../../assets/icons/EyeIcon';


interface InputProps {
  type: 'text' | 'email' | 'password';
  label?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  iconLeft?: React.ReactNode; // Left-side icon inside input
  iconRight?: React.ReactNode; // Right-side icon inside input
  togglePasswordVisibility?: boolean; // Enable show/hide toggle for passwords
  error?: string; // Optional error message
  className?: string; // Additional classes for styling
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
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
  error,
  className = '',
  onBlur
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
            onBlur={onBlur}
            placeholder={placeholder}
            className={`w-full text-zinc-700  p-3 ${iconLeft ? 'pl-10' : 'pl-3'} ${iconRight ? 'pr-10' : 'pr-3'} border-2 rounded ${
              error ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none`}
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

        {error && <p data-testid="input-error" className="mt-1 text-red-500 text-sm">{error}</p>}

      </div>
      
    </div>
  );
};

export default Input;
