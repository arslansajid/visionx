import { SET_BOOKINGS_VALUES, SET_BOOKINGS_KEYS, RESET_STORE } from '../actions/ActionTypes';
import { combineReducers } from 'redux';

// export default function bookingValues(state = [], action) {
//     switch (action.type) {
//       case SET_BOOKINGS:
//         console.log('set bookings Action')
//         return action.payload;
//       case RESET_STORE:
//         return [];
//       default:
//         return state;
//     }
//   }


export function bookingValues(state = [], action) {
    switch (action.type) {
      case SET_BOOKINGS_VALUES:
      console.log('set Bookings values Action')
        return action.payload;
      case RESET_STORE:
        return [];
      default:
        return state;
    }
  }

  export function bookingKeys(state = 0, action) {
    switch (action.type) {
      case SET_BOOKINGS_KEYS:
        console.log('Set Bookings keys Action')
        return action.payload;
      case RESET_STORE:
        return [];
      default:
        return state;
    }
  }

export default combineReducers({
    bookingValues,
    bookingKeys
});