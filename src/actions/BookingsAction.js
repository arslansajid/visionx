import * as types from './ActionTypes';

export function setBookingValues(value) {
  return {type: types.SET_BOOKINGS_VALUES, payload: value };
}

export function setBookingKeys(value) {
    return {type: types.SET_BOOKINGS_KEYS, payload: value };
  }
