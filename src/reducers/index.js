import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
// import carFormReducer from '../slices/carFormSlice';
import scheduleReducer from './scheduleReducer';

export default combineReducers({
    // carFormReducer,
    scheduleReducer,
    form
});