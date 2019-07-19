import * as types from './ActionTypes';

export function setHeaderRooms(value) {
  return {type: types.SET_HEADER_ROOMS, payload: value };
}
