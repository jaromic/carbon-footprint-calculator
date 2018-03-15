import { combineReducers } from 'redux';
import CarsReducer from './car_reducer';

const rootReducer = combineReducers({
  car: CarsReducer
});

export default rootReducer;
