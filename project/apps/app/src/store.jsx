import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Adjust the path accordingly

const store = configureStore({
  reducer: rootReducer,
});

export default store;
