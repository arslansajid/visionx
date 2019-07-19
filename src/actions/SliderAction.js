import * as types from './ActionTypes';

export function setSliderValue(value) {
  return {type: types.SET_SLIDER_VALUE, payload: value };
}
