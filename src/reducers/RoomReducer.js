
import { SET_ROOM_VALUE, RESET_STORE } from '../actions/ActionTypes';

export default function totalRoomCount(state = 0, action) {
    switch (action.type) {
      case SET_ROOM_VALUE:
        console.log('RoomValue Action')
        return action.payload;
      case RESET_STORE:
        return 0;
      default:
        return state;
    }
  }
