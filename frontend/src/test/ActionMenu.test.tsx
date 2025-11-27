import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActionMenu from '../components/ActionMenu';

describe('ActionMenu component', () => {
  beforeEach(() => {
    render(<ActionMenu />);
  });

  it('renders the toggle link with emoji and correct attributes', () => {
    // selecionar exatamente o texto "Perfil" para não confundir com "Meu Perfil"
    const toggle = screen.getByText(/^Perfil$/i) as HTMLAnchorElement;
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAttribute('id', 'navbarDropdown');
    expect(toggle).toHaveAttribute('data-bs-toggle', 'dropdown');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    // emoji span tem role img e aria-label "user"
    const emoji = screen.getByLabelText('user');
    expect(emoji).toBeInTheDocument();
    expect(emoji).toHaveTextContent('👤');
  });

  it('renders all menu items with correct text and hrefs', () => {
    const meuPerfil = screen.getByText('Meu Perfil') as HTMLAnchorElement;
    const minhasReceitas = screen.getByText('Minhas Receitas') as HTMLAnchorElement;
    const sair = screen.getByText('Sair') as HTMLAnchorElement;

    expect(meuPerfil).toBeInTheDocument();
    expect(meuPerfil.closest('a')).toHaveAttribute('href', '/perfil');

    expect(minhasReceitas).toBeInTheDocument();
    expect(minhasReceitas.closest('a')).toHaveAttribute('href', '/minhas-receitas');

    expect(sair).toBeInTheDocument();
    expect(sair.closest('a')).toHaveAttribute('href', '/logout');
  });

  it('renders dropdown menu container and divider', () => {
    const menu = screen.getByRole('list');
    expect(menu).toBeInTheDocument();
    expect(menu).toHaveClass('dropdown-menu');
    expect(menu).toHaveAttribute('aria-labelledby', 'navbarDropdown');

    const divider = document.querySelector('hr.dropdown-divider');
    expect(divider).toBeInTheDocument();
  });
});