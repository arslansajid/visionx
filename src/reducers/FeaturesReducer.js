
// import initialState from './InitialState';
import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/ActionTypes';

export default function featuresArray(state = [], action) {
    switch (action.type) {
      case ADD_FEATURE:
        console.log('Feature_add Action')
        return [...state, ...action.payload];
      case REMOVE_FEATURE:
        console.log('Feature_remove Action')
        var index = state.indexOf(...action.payload);
        if (index !== -1) state.splice(index, 1);
        return state
      default:
        return state;
    }
  }
