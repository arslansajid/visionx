import * as types from './ActionTypes';

export function setPaymentBreakDownData(value) {
  return {type: types.SET_PAYMENT_BREAKDOWN_DATA, payload: value };
}
