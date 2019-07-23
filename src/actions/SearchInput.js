import * as types from './ActionTypes';

export function setSearchInput(value) {
  return {type: types.SET_SEARCH_INPUT, payload: value };
}
