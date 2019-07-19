
import {SET_ADULT_VALUE, SET_CHILDREN_VALUE, RESET_STORE} from '../actions/ActionTypes';
import { combineReducers } from 'redux';

export function adultValue(state = 0, action) {
    switch (action.type) {
      case SET_ADULT_VALUE:
        console.log('ADD_ADULT Action')
        return action.payload;
      case RESET_STORE:
        return 0;
      default:
        return state;
    }
  }

  export function childrenValue(state = 0, action) {
    switch (action.type) {
      case SET_CHILDREN_VALUE:
        console.log('ADD_ADULT Action')
        return action.payload;
      case RESET_STORE:
        return 0;
      default:
        return state;
    }
  }

export default combineReducers({
    adultValue,
    childrenValue
});
