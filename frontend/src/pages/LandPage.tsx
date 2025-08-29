import React from 'react';
import RecipeCard from '../components/RecipeCards';

export const Inicio: React.FC = () => {
  const recipes = [
    {
      title: "Bolo de Chocolate",
      description: "Um bolo delicioso e fácil de fazer.",
      image: "/Bolo-de-chocolate.jpg",
      time: "45 min",
      servings: 8
    },
    {
      title: "Salada Caesar",
      description: "Uma salada fresca e crocante.",
      image: "/salada-caesar.webp",
      time: "15 min",
      servings: 4
    },
    {
      title: "Macarrão Carbonara",
      description: "Clássico italiano cremoso e saboroso.",
      image: "/Receita-de-macarrao-a-carbonara-768x619.jpg",
      time: "30 min",
      servings: 6
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Receitas em Destaque</h2>
      <div className="row">
        {recipes.map((recipe, index) => (
          <div key={index} className="col-md-4 mb-4">
            <RecipeCard
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