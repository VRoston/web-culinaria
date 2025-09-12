import React, { useEffect, useState } from 'react';

type Recipe = {
  id: number;
  name: string;
  // add other fields if needed
};

const RecipesList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch('/api/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Erro:', error));
  }, []);

  console.log(recipes);
  
  return (
    <div>
      {recipes.map(recipe => <div key={recipe.id}>{recipe.name}</div>)}
    </div>
  );
};

export default RecipesList;