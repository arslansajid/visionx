
import { SET_SLIDER_VALUE, RESET_PRICES } from '../actions/ActionTypes';

export default function setSliderValue(state = 0, action) {
    switch (action.type) {
      case SET_SLIDER_VALUE:
        console.log('RoomValue Action')
        return action.payload;
      case RESET_PRICES:
        console.log('Reset Price Action')
        return {
          min: 2000,
          max: 6000,
        };
      default:
        return state;
    }
  }
