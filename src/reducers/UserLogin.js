
import { USER_LOGIN, USER_LOGOUT } from '../actions/ActionTypes';

export default function userLogin(state = {}, action) {
    switch (action.type) {
      case USER_LOGIN:
        console.log('USerLogin Action')
        return action.payload;
      case USER_LOGOUT:
        console.log('UserLogout Action')
        return {}
      default:
        return state;
    }
  }
