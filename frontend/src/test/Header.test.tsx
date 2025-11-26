import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}), { virtual: true });

describe('Header component', () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
    render(<Header />);
  });

  it('renders brand with chef emoji and site title linking to /', () => {
    const brand = screen.getByRole('link', { name: /web-culinária/i });
    expect(brand).toBeInTheDocument();
    expect(brand).toHaveAttribute('href', '/');

    const chef = screen.getByLabelText('chef');
    expect(chef).toBeInTheDocument();
    expect(chef).toHaveTextContent('👨‍🍳');
  });

  it('renders "Criar Receita" button and navigates when clicked', () => {
    const btn = screen.getByRole('button', { name: 'Criar Receita' });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass('btn', 'btn-primary');

    fireEvent.click(btn);
    expect(mockedNavigate).toHaveBeenCalledWith('/criar-receita');
  });
});