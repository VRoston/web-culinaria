import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActionMenu from './ActionMenu';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow-sm"
      style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}
    >
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
              <Button
                text="Criar Receita"
                onClick={() => navigate('/criar-receita')}
                variant="primary"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;