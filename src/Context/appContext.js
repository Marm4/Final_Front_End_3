import React, { createContext, useReducer } from 'react';
import appReducer from '../Reducers/appReducer';

const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
const initialState = {
    theme: 'light',
    apiData: null,
    favorites: storedFavorites,
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return(
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};  

export default AppContext;