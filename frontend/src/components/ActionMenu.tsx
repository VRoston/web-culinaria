import React from 'react';

const ActionMenu: React.FC = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span role="img" aria-label="user">👤</span> Perfil
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="/perfil">Meu Perfil</a></li>
        <li><a className="dropdown-item" href="/minhas-receitas">Minhas Receitas</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="/logout">Sair</a></li>
      </ul>
    </li>
  );
};

export default ActionMenu;