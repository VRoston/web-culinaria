import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCards';
import { mockRecipes } from '../mockData';
import Button from '../components/Button';

export const Inicio: React.FC = () => {
  const [visibleRecipes, setVisibleRecipes] = useState(20);
  const destaque = mockRecipes.slice(0, 3);
  const displayedRecipes = mockRecipes.slice(0, visibleRecipes);

  const loadMore = () => {
    setVisibleRecipes(prev => prev + 20);
  };

  return (
    <div style={{ backgroundColor: 'rgba(255, 248, 220, 0.8)', minHeight: '100vh', width: '100%' }}>
      <div className="container py-5">
        <h2 className="text-center mb-4">Receitas em Destaque</h2>
        <div className="row">
          {destaque.map((recipe) => (
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

        <h2 className="text-center mb-4 mt-5">Todas as Receitas</h2>
        <div className="row">
          {displayedRecipes.map((recipe) => (
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
        {visibleRecipes < mockRecipes.length && (
          <div className="text-center mt-4">
            <Button text="Carregar Mais" variant="primary" onClick={loadMore} />
          </div>
        )}
      </div>
    </div>
  );
};