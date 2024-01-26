import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../Context/appContext';

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(AppContext);
  const { favorites } = state;

  const isFavorite = favorites.some(fav => fav.id === id);

  const toggleFav = () => {
    const updatedFavorites = isFavorite
      ? favorites.filter(fav => fav.id !== id)
      : [...favorites, { id, name, username }];

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    dispatch({ type: 'SET_FAVORITES', payload: updatedFavorites });
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <h2>{name}</h2>
        <p>Username: {username}</p>
      </Link>
      <button onClick={toggleFav} className="favButton">
        {isFavorite ? 'Delete fav' : 'Add fav'}
      </button>
    </div>
  );
};

export default Card;