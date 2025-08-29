import React from 'react';
import RecipeCard from '../components/RecipeCards';
import { mockRecipes } from '../mockData';

export const Inicio: React.FC = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Receitas em Destaque</h2>
      <div className="row">
        {mockRecipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4 mb-4">
            <RecipeCard
              id={recipe.id}
              title={recipe.title}
              description={recipe.description}
              image={recipe.image}
              time={recipe.time}
              servings={recipe.servings}
            />
          </div>
        ))}
      </div>
    </div>
  );
};