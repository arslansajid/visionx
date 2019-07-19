import * as types from './ActionTypes';

export function calculateBill(value) {
  return {type: types.CALCULATE_BILL, payload: value };
}
