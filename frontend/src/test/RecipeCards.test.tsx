// ...existing code...
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// mock para evitar dependência de react-router-dom nos testes
jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...rest }: any) => <a href={to} {...rest}>{children}</a>,
}), { virtual: true });

import RecipeCard from '../components/RecipeCards';

// ...existing code...
describe('RecipeCard component', () => {
  const props = {
    id: '123',
    title: 'Torta de Maçã',
    description: 'Deliciosa torta com maçãs frescas.',
    image: 'http://example.com/torta.jpg',
    time: '45 min',
    servings: 4,
  };

  beforeEach(() => {
    render(<RecipeCard {...props} />);
  });

  it('renders image with correct src and alt', () => {
    const img = screen.getByRole('img', { name: props.title }) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', props.image);
    expect(img).toHaveAttribute('alt', props.title);
  });

  it('renders title and description', () => {
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  it('shows time and servings with emoji labels', () => {
    const clock = screen.getByLabelText('clock');
    const servings = screen.getByLabelText('servings');
    expect(clock).toBeInTheDocument();
    expect(clock).toHaveTextContent('⏱️');
    expect(servings).toBeInTheDocument();
    expect(servings).toHaveTextContent('🍽️');
    // also check the textual values are present
    expect(screen.getByText(/45 min/)).toBeInTheDocument();
    expect(screen.getByText(/4/)).toBeInTheDocument();
  });

  it('renders "Ver Receita" link pointing to the recipe route', () => {
    const link = screen.getByRole('link', { name: /ver receita/i }) as HTMLAnchorElement;
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/receita/${props.id}`);
  });
});
// ...existing code...