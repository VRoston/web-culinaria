import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { mockRecipes } from '../mockData';

const MyRecipes: React.FC = () => {
  // Usando dados mockados para receitas do usuário
  const userRecipes = mockRecipes;

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Minhas Receitas</h2>
        <Link to="/criar-receita">
          <Button text="Criar Nova Receita" variant="success" />
        </Link>
      </div>
      <div className="row">
        {userRecipes.length > 0 ? (
          userRecipes.map((recipe) => (
            <div key={recipe.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={recipe.image} className="card-img-top" alt={recipe.title} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text flex-grow-1">{recipe.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <small className="text-muted">
                      <span role="img" aria-label="clock">⏱️</span> {recipe.time} | <span role="img" aria-label="servings">🍽️</span> {recipe.servings}
                    </small>
                    <Link to={`/receita/${recipe.id}`}>
                      <Button text="Ver Receita" variant="primary" size="sm" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>Você ainda não tem receitas. Crie sua primeira receita!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRecipes;