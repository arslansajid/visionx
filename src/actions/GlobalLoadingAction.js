import * as types from './ActionTypes';

export function setGlobalLoading(value) {
  return {type: types.SET_GLOBAL_LOADING, payload: value };
}
