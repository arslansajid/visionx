import * as types from './ActionTypes';

export function bookRoom(value) {
  return {type: types.BOOK_ROOM, payload: value };
}
