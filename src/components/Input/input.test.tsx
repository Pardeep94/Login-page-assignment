import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input from './input';
import EmailIcon from '../../assets/icons/EmailIcon';
import LockIcon from '../../assets/icons/LockIcon';

describe('Input Component', () => {
  test('renders label correctly', () => {
    render(<Input type="text" label="Email" value="" onChange={() => { } } id={''} />);
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
  });

  test('renders placeholder correctly', () => {
    render(<Input type="text" placeholder="Enter text" value="" onChange={() => { } } id={''} />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  test('renders left and right icons when provided', () => {
    render(
      <Input
            type="text"
            iconLeft={<EmailIcon />}
            iconRight={<LockIcon />}
            value=""
            onChange={() => { } } id={''}      />
    );
    expect(screen.getByTestId('input-icon-left')).toBeInTheDocument();
    expect(screen.getByTestId('input-icon-right')).toBeInTheDocument();
  });

  test('toggles password visibility when show/hide button is clicked', () => {
    render(<Input type="password" togglePasswordVisibility={true} value="password" onChange={() => { } } id={''} />);
    const toggleButton = screen.getByTestId('toggle-password-visibility');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('input-element')).toHaveAttribute('type', 'text');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('input-element')).toHaveAttribute('type', 'password');
  });

  test('displays error message', () => {
    render(<Input type="text" error="Invalid input" value="" onChange={() => { } } id={''} />);
    expect(screen.getByTestId('input-error')).toHaveTextContent('Invalid input');
  });
});
