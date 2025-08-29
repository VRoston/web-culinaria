import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const MyRecipes: React.FC = () => {
  // Placeholder para receitas do usuário
  const userRecipes = [
    {
      id: 1,
      title: "Minha Receita 1",
      description: "Descrição da receita 1.",
      image: "/placeholder.jpg"
    },
    // Adicione mais receitas conforme necessário
  ];

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
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">{recipe.description}</p>
                  <Button text="Editar" variant="primary" size="sm" />
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