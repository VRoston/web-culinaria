import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActionMenu from './ActionMenu';

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <span role="img" aria-label="chef" style={{ fontSize: '1.8rem', marginRight: '8px' }}>👨‍🍳</span>
          <span className="fw-bold">Web-Culinária</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/receitas">Minhas Receitas</a>
            </li>
            <ActionMenu />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;