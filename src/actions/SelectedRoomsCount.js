import * as types from './ActionTypes';

export function setSelectedRooms(value) {
  return {type: types.SET_SELECTED_ROOMS, payload: value };
}
