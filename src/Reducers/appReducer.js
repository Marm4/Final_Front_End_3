const initialState = {
    theme: 'light',
    apiData: null,
    favorites: [],
};

const appReducer = (state, action) => {
    switch (action.type){
        case 'TOGGLE_THEME':
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
        
        case 'SET_API_DATA':  
            return { ...state, apiData: action.payload };

        case 'ADD_TO_FAVORITES':
            const dentistToAdd = state.apiData.find(dentist => dentist.id === action.payload);
            const updatedFavorites = [...state.favorites, dentistToAdd];
            return { ...state, favorites: updatedFavorites };

        default:
            return state;
    }
};

export default appReducer;