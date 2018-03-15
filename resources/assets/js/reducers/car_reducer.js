import { CALCULATE_EMISSIONS } from '../actions';

export default function(state = {emissions: 1000000}, action) {

  switch (action.type) {
    case CALCULATE_EMISSIONS:
      return action.payload;
    default:
      return state;
  }
}