import { configureStore } from '@reduxjs/toolkit';

// Default export of reducers
import carFormReducer from './carFormSlices';

export default configureStore({
  reducer: {
    carForm: carFormReducer,
  },
});
