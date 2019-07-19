
import { SET_PAYMENT_BREAKDOWN_DATA, RESET_STORE } from '../actions/ActionTypes';

export default function setPaymentBreakDownData(state = {}, action) {
    switch (action.type) {
        case SET_PAYMENT_BREAKDOWN_DATA:
            console.log('Set PAYMENT BREAKDOWN DATA Action')
        return { ...state, ...action.payload }
        case RESET_STORE:
        return {};
      default:
        return state;
    }
  }
