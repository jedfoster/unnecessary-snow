import { configureStore, combineReducers } from "@reduxjs/toolkit";

let reducers = {};

const store = configureStore({ reducer: {} });

store.injectReducer = (key, reducer) => {
  reducers[key] = reducer;
  store.replaceReducer(combineReducers(reducers));
};
console.log(store);
export default store;

// import { combineReducers } from 'redux'

// import recipesReducer from './recipes'

// const rootReducer = combineReducers({
//   recipes: recipesReducer,
// })

// export default rootReducer
