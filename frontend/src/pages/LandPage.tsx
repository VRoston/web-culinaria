import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCards';
import Button from '../components/Button';
import RecipesList from '../RecipesList';  // Mantém para exibir a lista simples se necessário

export const Inicio: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);  // Substitua 'any' por tipo Recipe se definido
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleRecipes, setVisibleRecipes] = useState(20);

  useEffect(() => {
    fetch('/api/recipes')
      .then(response => {
        if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
        return response.json();
      })
      .then(data => {
        setRecipes(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Carregando receitas...</div>;
  if (error) return <div>Erro: {error}</div>;

  const destaque = recipes.slice(0, 3);
  const displayedRecipes = recipes.slice(0, visibleRecipes);

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
                title={recipe.title}  // Ajuste para corresponder ao back-end (ex.: 'title')
                description={recipe.description}
                image={recipe.image_path}  // Ajuste para 'image_path' do back-end
                time={recipe.preparation_time}  // Ajuste para 'preparation_time'
                servings={recipe.servings}
              />
            </div>
          ))}
        </div>
        {/* Opcional: Exibir RecipesList para debug ou lista simples */}
        <RecipesList />
        <h2 className="text-center mb-4 mt-5">Todas as Receitas</h2>
        <div className="row">
          {displayedRecipes.map((recipe) => (
            <div key={recipe.id} className="col-md-4 mb-4">
              <RecipeCard
                id={recipe.id}
                title={recipe.title}
                description={recipe.description}
                image={recipe.image_path}
                time={recipe.preparation_time}
                servings={recipe.servings}
              />
            </div>
          ))}
        </div>
        {visibleRecipes < recipes.length && (
          <div className="text-center mt-4">
            <Button text="Carregar Mais" variant="primary" onClick={loadMore} />
          </div>
        )}
      </div>
    </div>
  );
};