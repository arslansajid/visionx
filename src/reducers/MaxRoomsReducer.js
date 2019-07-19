
import { SET_MAX_ROOMS } from '../actions/ActionTypes';

export default function setMaxRooms(state = 0, action) {
    switch (action.type) {
      case SET_MAX_ROOMS:
        console.log('Set MAx Rooms Action')
        return action.payload;
      default:
        return state;
    }
  }
