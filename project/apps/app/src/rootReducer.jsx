import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer'; // Adjust the path accordingly

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  // other reducers...
});

export default rootReducer;
