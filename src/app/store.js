import { createStore, configureStore, combineReducers } from '@reduxjs/toolkit';

let reducers = {};

const store = createStore(s => s);

store.injectReducer = (key, reducer) => {
  reducers[key] = reducer;
  store.replaceReducer(combineReducers(reducers));
};

export default store;


// import { combineReducers } from 'redux'

// import recipesReducer from './recipes'

// const rootReducer = combineReducers({
//   recipes: recipesReducer,
// })

// export default rootReducer
