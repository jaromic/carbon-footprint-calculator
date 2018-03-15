import { combineReducers } from 'redux';
import CarsReducer from './car_reducer';

const rootReducer = combineReducers({
  cars: CarsReducer
});

export default rootReducer;
