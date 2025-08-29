import React, { useState } from 'react';
import Button from '../components/Button';

const CreateRecipe: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState('');
  const [time, setTime] = useState('');
  const [servings, setServings] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now().toString(),
      title,
      description,
      image,
      time,
      servings,
      ingredients: ingredients.split('\n').filter(item => item.trim() !== ''),
      instructions: instructions.split('\n').filter(item => item.trim() !== '')
    };
    console.log('Nova receita criada:', newRecipe);
    alert('Receita criada com sucesso!');
    // Aqui você pode adicionar lógica para salvar no mock ou API
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-success text-white">
              <h3 className="card-title mb-0">Criar Nova Receita</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Título da Receita</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Descrição</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="time" className="form-label">Tempo de Preparo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="Ex: 45 min"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="servings" className="form-label">Número de Porções</label>
                  <input
                    type="number"
                    className="form-control"
                    id="servings"
                    value={servings}
                    onChange={(e) => setServings(Number(e.target.value))}
                    min={1}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ingredients" className="form-label">Ingredientes</label>
                  <textarea
                    className="form-control"
                    id="ingredients"
                    rows={5}
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="Liste os ingredientes, um por linha"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="instructions" className="form-label">Instruções</label>
                  <textarea
                    className="form-control"
                    id="instructions"
                    rows={5}
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    placeholder="Descreva o passo a passo, um por linha"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">Caminho da Imagem</label>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Ex: /caminho/para/imagem.jpg"
                    required
                  />
                </div>
                <Button text="Criar Receita" variant="success" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;