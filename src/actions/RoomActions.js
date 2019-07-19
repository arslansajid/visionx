import * as types from './ActionTypes';

export function setRoomValue(value) {
  return {type: types.SET_ROOM_VALUE, payload: value };
}
