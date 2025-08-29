import React from 'react';

const ProfileSettings: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="card-title mb-0">Meu Perfil</h3>
            </div>
            <div className="card-body">
              <div className="text-center mb-4">
                <span role="img" aria-label="user" style={{ fontSize: '4rem' }}>👤</span>
              </div>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nome</label>
                  <input type="text" className="form-control" id="name" placeholder="Seu nome" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input type="email" className="form-control" id="email" placeholder="seu@email.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="bio" className="form-label">Biografia</label>
                  <textarea className="form-control" id="bio" rows={3} placeholder="Conte um pouco sobre você..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Salvar Alterações</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;