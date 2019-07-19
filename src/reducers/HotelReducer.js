import initialState from './InitialState';
import {FETCH_HOTELS, RECEIVE_HOTELS} from '../actions/ActionTypes';

export default function hotels(state = initialState.hotels, action) {
  let newState;
  switch (action.type) {
    case FETCH_HOTELS:
      console.log('FETCH_HOTEL Action')
      return action;
    case RECEIVE_HOTELS:
      newState = action.hotels;
      console.log('RECEIVE_HOTEL Action')
      return newState;
    default:
      return state;
  }
}