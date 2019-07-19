
import { SET_SELECTED_ROOMS } from '../actions/ActionTypes';

export default function setSelectedRooms(state = 0, action) {
    switch (action.type) {
      case SET_SELECTED_ROOMS:
        console.log('SelectedRoom Action')
        return action.payload;
      default:
        return state;
    }
  }
