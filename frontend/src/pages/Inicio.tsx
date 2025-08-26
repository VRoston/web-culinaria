import React from 'react';

export const Inicio: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="text-center">
        <h1 className="mb-3">Bem-vindo ao Web-Culinária!</h1>
        <p className="lead mb-4">
          Descubra receitas fáceis, práticas e deliciosas para todos os momentos.<br />
          Inspire-se, cozinhe e compartilhe sabores!
        </p>
        <img
          src="/logo192.png"
          alt="Logo Web-Culinária"
          style={{ width: 120, marginBottom: '30px' }}
        />
        <div>
          <a href="/receitas" className="btn btn-success btn-lg">
            Ver Receitas
          </a>
        </div>
      </div>
    </div>
  );
};