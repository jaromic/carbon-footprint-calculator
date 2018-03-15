import { combineReducers } from 'redux';
import CarReducer from './car_reducer';

const rootReducer = combineReducers({
  car: CarsReducer
});

export default rootReducer;
