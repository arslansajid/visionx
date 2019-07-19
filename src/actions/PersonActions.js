import * as types from './ActionTypes';

export function setAdultValue(value) {
  return {type: types.SET_ADULT_VALUE, payload: value };
}

export function setChildrenValue(value) {
  return {type: types.SET_CHILDREN_VALUE, payload: value };
}
