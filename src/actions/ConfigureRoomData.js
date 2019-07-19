import * as types from './ActionTypes';

export function setConfigureRoomData(value) {
  return {type: types.SET_CONFIGURE_ROOM_DATA, payload: value };
}

export function removeConfigureRoomData(value) {
  return {type: types.REMOVE_CONFIGURE_ROOM_DATA, payload: value };
}

