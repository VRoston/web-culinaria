import React from 'react';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  time: string;
  servings: number;
}


const RecipeCard: React.FC<RecipeCardProps> = ({ id, title, description, image, time, servings }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <small className="text-muted">
            <span role="img" aria-label="clock">⏱️</span> {time} | <span role="img" aria-label="servings">🍽️</span> {servings}
          </small>
          <Link to={`/receita/${id}`} className="btn btn-success btn-sm">Ver Receita</Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;