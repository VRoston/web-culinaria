// ...existing code...
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';

describe('Button component', () => {
  it('renders with provided text and default props', () => {
    render(<Button text="Click me" />);
    const btn = screen.getByRole('button', { name: 'Click me' });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass('btn', 'btn-primary');
    expect(btn).toHaveAttribute('type', 'button');
    expect(btn).not.toBeDisabled();
  });

  it('applies variant, size, additional className, type and disabled', () => {
    render(
      <Button
        text="Submit"
        variant="success"
        size="lg"
        className="custom-class"
        type="submit"
        disabled
      />
    );
    const btn = screen.getByRole('button', { name: 'Submit' });
    expect(btn).toHaveClass('btn', 'btn-success', 'btn-lg', 'custom-class');
    expect(btn).toHaveAttribute('type', 'submit');
    expect(btn).toBeDisabled();
  });

  it('calls onClick when clicked and not disabled', () => {
    const handleClick = jest.fn();
    render(<Button text="Go" onClick={handleClick} />);
    const btn = screen.getByRole('button', { name: 'Go' });
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button text="No" onClick={handleClick} disabled />);
    const btn = screen.getByRole('button', { name: 'No' });
    fireEvent.click(btn);
    expect(handleClick).not.toHaveBeenCalled();
  });
});