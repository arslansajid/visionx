import { CALCULATE_BILL, RESET_CALCULATE_BILL ,RESET_STORE } from '../actions/ActionTypes';

export default function calculateBill(state = 0, action) {
    switch (action.type) {
      case CALCULATE_BILL:
        console.log('CalculateBill Action')
        return action.payload;
      case RESET_CALCULATE_BILL:
        return 0;
      case RESET_STORE:
        return 0;
      default:
        return state;
    }
  }
