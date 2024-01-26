import React, { useContext } from 'react';
import AppContext from '../Context/appContext';
import './Navbar'

const Navbar = () => {
  const { dispatch } = useContext(AppContext);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li><a href="/favs">Favoritos</a></li>
      </ul>
      <button onClick={toggleTheme} class="themeButton">Cambiar tema</button>
      
    </nav>
  );
};

export default Navbar;