import * as types from './ActionTypes';

function getHotelsArray(response) {
    let names= [];
    response.data.data.hotels.map((hotel) => {
      return names.push(hotel.name);
    })
    return names;
  }

export function receiveHotels(data) {
  return {type: types.RECEIVE_HOTELS, hotels: data};
}

export function fetchHotels() {
  return dispatch => {
    fetch('https://roomy.pk/staging1/api/v1/hotels')
        .then(response =>
            response.json().then(data => ({
                data: data,
                status: response.status
            }))
        )
            .then(response => {
                if(response.status === 200){
                    let hotelNames = getHotelsArray(response);
                    dispatch(receiveHotels(hotelNames))
                }
            });
    };
}