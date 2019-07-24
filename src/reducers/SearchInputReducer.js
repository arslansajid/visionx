import { SET_SEARCH_INPUT, RESULTS_FETCHED, INFINITE_SCROLL_RESULTS_FETCHED, REVIEWS_FETCHED } from '../actions/ActionTypes';
import { combineReducers } from 'redux';

export function searchedInput(state = '', action) {
    switch (action.type) {
      case SET_SEARCH_INPUT:
        console.log('SET_SEARCH_INPUT Action')
        return action.payload;
      default:
        return state;
    }
  }

export function results(state = [], action) {
  switch(action.type) {
    case RESULTS_FETCHED:
    return action.payload;
    default: 
    return state;
  }
}

export function reviews(state = [], action) {
  switch(action.type) {
    case REVIEWS_FETCHED:
    return action.payload;
    default: 
    return state;
  }
}

export function inifiniteScrollResults(state = [], action) {
  switch(action.type) {
    case INFINITE_SCROLL_RESULTS_FETCHED:
    return [ ...state, ...action.payload.searchResult ];
    default: 
    return state;
  }

}

export default combineReducers({
  searchedInput,
  results,
  reviews,
  inifiniteScrollResults
})