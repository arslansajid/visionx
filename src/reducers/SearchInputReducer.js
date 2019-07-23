import { SET_SEARCH_INPUT, RESET_STORE } from '../actions/ActionTypes';

export default function totalRoomCount(state = '', action) {
    switch (action.type) {
      case SET_SEARCH_INPUT:
        console.log('SET_SEARCH_INPUT Action')
        return action.payload;
      case RESET_STORE:
        return '';
      default:
        return state;
    }
  }
