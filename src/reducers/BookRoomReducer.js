import { BOOK_ROOM, RESET_STORE } from '../actions/ActionTypes';

export default function bookRoom(state = 0, action) {
    switch (action.type) {
      case BOOK_ROOM:
        console.log('RoomBooking Action')
        return action.payload;
      case RESET_STORE:
        return 0;
      default:
        return state;
    }
  }
