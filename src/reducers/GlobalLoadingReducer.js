import { SET_GLOBAL_LOADING } from '../actions/ActionTypes';

export default function setGlobalLoading(state = true, action) {
    switch (action.type) {
      case SET_GLOBAL_LOADING:
        console.log('Global Loading Action')
        return action.payload;
      default:
        return state;
    }
  }
