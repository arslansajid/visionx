
import { SET_CONFIGURE_ROOM_DATA, RESET_STORE, REMOVE_CONFIGURE_ROOM_DATA } from '../actions/ActionTypes';

export default function setConfigureRoomData(state = {}, action) {
    switch (action.type) {

      case SET_CONFIGURE_ROOM_DATA:
        var currentStatePair = state;
        var incomingPair = action.payload.pair;
        var incomingKeyName = Object.keys(incomingPair)[0];
        if(!currentStatePair[incomingKeyName]) {
          currentStatePair[incomingKeyName] = [{}];
        }
        currentStatePair[incomingKeyName][action.payload.index] = action.payload.pair[incomingKeyName][0]

        var nextState = Object.assign({}, currentStatePair);
        return nextState;

      case REMOVE_CONFIGURE_ROOM_DATA:
        var currentStatePair = state;
        var incomingPair = action.payload.pair;
        var incomingKeyName = Object.keys(incomingPair)[0];
        if(!currentStatePair[incomingKeyName]) {
          currentStatePair[incomingKeyName] = [{}];
        }
        currentStatePair[incomingKeyName].pop();

        var nextState = Object.assign({}, currentStatePair);
        return nextState;

      case RESET_STORE:
        return {};
        
      default:
        return state;
    }
  }
