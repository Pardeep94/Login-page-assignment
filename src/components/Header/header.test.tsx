import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './header';

describe('Header Component', () => {
  test('renders logo with correct source and alt text', () => {
    render(<Header />);

    // Check if the image with the correct alt text is in the document
    const logoImage = screen.getByAltText(/Noventiq Logo/i);
    expect(logoImage).toBeInTheDocument();

    // Check if the src attribute is correctly set
    expect(logoImage).toHaveAttribute('src', expect.stringContaining('logo.svg'));
    
    // Optional: Check if the class names are applied correctly
    expect(logoImage).toHaveClass('w-2/4 mx-auto');
  });
});
