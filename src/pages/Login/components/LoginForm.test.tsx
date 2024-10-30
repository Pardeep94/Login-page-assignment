import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from './LoginForm';


describe('LoginForm Component', () => {
  test('renders email and password input fields', () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument();
  });

  test('allows user to type in email and password fields', () => {
    render(<LoginForm />);
    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    
    fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
    expect(emailInput).toHaveValue('user@example.com');
    
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput).toHaveValue('password123');
  });

  test('renders Remember Me checkbox with correct initial state', () => {
    render(<LoginForm />);

    const checkbox = screen.getByTestId('remember-me-checkbox');
    
    expect(checkbox).not.toBeChecked();
  });

  test('toggles Remember Me checkbox when clicked', () => {
    render(<LoginForm />);

    const checkbox = screen.getByTestId('remember-me-checkbox');

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
