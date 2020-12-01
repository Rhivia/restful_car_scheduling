import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

export default function configureStore() {
  const middlewares = [
    ReduxThunk,
  ];
  return createStore(reducers, {}, applyMiddleware(...middlewares))
}

// import { configureStore } from '@reduxjs/toolkit';

// // Default export of reducers
// import carFormReducer from './carFormSlices';

// export default configureStore({
//   reducer: {
//     carForm: carFormReducer,
//   },
// });