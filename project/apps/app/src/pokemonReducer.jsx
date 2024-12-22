const initialState = {
    list: []
  };
  
  const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_POKEMON_LIST':
        return {
          ...state,
          list: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default pokemonReducer;
  