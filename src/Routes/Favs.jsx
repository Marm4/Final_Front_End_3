import React, { useContext } from "react";
import AppContext from "../Context/appContext";
import Card from "../Components/Card";

const Favs = () => {
  const { state } = useContext(AppContext);
  const { theme, favorites } = state;

  return (
    <div className={`favs-container ${theme}`}>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {favorites.length > 0 ? (
          favorites.map((dentist) => (
            <Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
            />
          ))
        ) : (
          <p>No hay dentistas favoritos.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
