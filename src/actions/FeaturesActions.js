import * as types from './ActionTypes';

export function addFeature(value) {
    const delay = (ms) => new Promise(resolve =>
        setTimeout(resolve, ms)
      );
return dispatch => {
    return delay(0).then(() => {
      dispatch({
        type: types.ADD_FEATURE,
        payload: value,
      })
    });
  }
        
}

export function removeFeature(value) {
    const delay = (ms) => new Promise(resolve =>
        setTimeout(resolve, ms)
      );
return dispatch => {
    return delay(0).then(() => {
      dispatch({
        type: types.REMOVE_FEATURE,
        payload: value,
      })
    });
  } 
}
