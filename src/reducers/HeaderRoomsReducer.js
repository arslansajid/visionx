
import { SET_HEADER_ROOMS, RESET_STORE } from '../actions/ActionTypes';

export default function setHeaderRooms(state = {}, action) {
    switch (action.type) {
      case SET_HEADER_ROOMS:
        console.log('Set Header Rooms Action')
        // return action.payload;
        return { ...state, ...action.payload }
      case RESET_STORE:
        return {};
      default:
        return state;
    }
  }
