import * as types from './ActionTypes';

export function userLogin(value) {
  return {type: types.USER_LOGIN, payload: value };
}
