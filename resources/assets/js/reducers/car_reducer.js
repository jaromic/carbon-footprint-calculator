import { CALCULATE_EMISSIONS, UPDATE_CAR_FORM } from '../actions';

export default function(state = {
    emissionData: {
      emissions:1000000
    }, 
    formData: {
      distance: 10000,
      mpg: 25
    }
  },
  action) {

  switch (action.type) {
    case CALCULATE_EMISSIONS:
      return {...state, emissionData: action.payload};
    case UPDATE_CAR_FORM:
      return {...state, formData: action.payload}
    default:
      return state;
  }
}