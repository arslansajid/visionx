
import * as types from './ActionTypes';

export function setMaxRooms(value) {
  return {type: types.SET_MAX_ROOMS, payload: value };
}
