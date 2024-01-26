import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../Context/appContext';
import Card from '../Components/Card';

const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  const [dentists, setDentists] = useState([]);
  const { favorites } = state;
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardContainerRef = React.createRef();

  const handleScroll = (scrollDirection) => {
    const container = cardContainerRef.current;
    const scrollAmount = 200;
    if (scrollDirection === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
    setScrollPosition(container.scrollLeft);
  };

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch({ type: 'SET_API_DATA', payload: data });
        setDentists(data);
      } catch (error) {
        console.error('Error fetching dentists:', error);
      }
    };

    fetchDentists();
  }, [dispatch]);

  const addToFavorites = (dentistId) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: dentistId });
  };

  return (
    <div>
      <h1>Lista de Dentistas</h1>
      {dentists ? (
        <div className="card-container">
          {dentists.map((dentist) => (
            <Card
              className="card"
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
              onAddFav={() => addToFavorites(dentist.id)}
            />
          ))}
        </div>
      ) : (
        <p>Cargando dentistas...</p>
      )}
    </div>
  );
};

export default Home;