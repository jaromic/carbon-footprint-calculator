import _ from 'lodash';
import { CALCULATE_EMISSIONS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case CALCULATE_EMISSIONS:
      return {action.payload};
    default:
      return state;
  }
}