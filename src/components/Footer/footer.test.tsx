import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom'; // for better assertions
import Footer from './footer';

describe('Footer Component', () => {
  test('renders footer with correct text', () => {
    render(<Footer />);

    // Check if the footer contains the correct text
    const footerText = screen.getByText(/Copyright 2024 Noventiq \| Powered by Noventiq/i);
    expect(footerText).toBeInTheDocument();
    
    // Additional check for styling (optional)
    expect(footerText).toHaveClass('text-gray-600 font-extrabold text-xs');
  });
});
