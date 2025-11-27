import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type Recipe = {
  id: number;
  title: string;
  description: string;
  preparation_time: string;
  servings: number;
  ingredients: string[];  // Supondo que seja uma lista separada por \n no back-end
  instructions: string[];  // Mesmo para instructions
  image_path: string;
};

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/recipe/${id}`)
      .then(response => {
        if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
        return response.json();
      })
      .then(data => {
        // Ajuste para converter strings em arrays se necessário
        const adjustedRecipe: Recipe = {
          ...data,
          ingredients: data.ingredients ? data.ingredients.split('\n') : [],
          instructions: data.instructions ? data.instructions.split('\n') : [],
        };
        setRecipe(adjustedRecipe);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="container py-5">Carregando receita...</div>;
  if (error) return <div className="container py-5">Erro: {error}</div>;
  if (!recipe) return <div className="container py-5">Receita não encontrada</div>;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-success mb-3">{recipe.title}</h1>
            <p className="lead text-muted">{recipe.description}</p>
          </div>
          <div className="text-center mb-4">
            <img src={recipe.image_path} alt={recipe.title} className="img-fluid rounded shadow" style={{ maxHeight: '400px' }} />
          </div>
          <div className="row text-center mb-5">
            <div className="col-md-6">
              <div className="p-3 bg-light rounded">
                <h5><span role="img" aria-label="clock">⏱️</span> Tempo de Preparo</h5>
                <p className="h4 text-primary">{recipe.preparation_time}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 bg-light rounded">
                <h5><span role="img" aria-label="servings">🍽️</span> Porções</h5>
                <p className="h4 text-primary">{recipe.servings}</p>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h2 className="text-success mb-4"><span role="img" aria-label="ingredients">🥕</span> Ingredientes</h2>
            <ul className="list-unstyled">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-2 fs-5">
                  <span className="badge bg-secondary me-2">{index + 1}</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-success mb-4"><span role="img" aria-label="instructions">👨‍🍳</span> Instruções</h2>
            <ol className="list-unstyled">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="mb-3 fs-5 p-3 bg-light rounded">
                  <strong>Passo {index + 1}:</strong> {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;