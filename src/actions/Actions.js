import * as types from './ActionTypes';
import axios from 'axios';
import convert from 'xml-js';

export function setSearchInput(value) {
  return {type: types.SET_SEARCH_INPUT, payload: value };
}

export function fetchBooks(searchTerm, page) {
  return (dispatch, getState) => {
    // var inputValue = getState().searchInput;
    return axios.get(`https://www.goodreads.com/search/index.xml?key=DEZZre4OeBQSqC0L3wQQ&q=${searchTerm}&page=${page}`)
    .then((response) => {
      var result = convert.xml2js(response.data, {compact: true});
      var searchResult = result.GoodreadsResponse.search.results.work;
      dispatch({type: types.INFINITE_SCROLL_RESULTS_FETCHED, payload: searchResult});
    })
    .catch(() => {
      console.log('Error fetching results...');
    })
  }
}

export function fetchBookData(bookId) {
  return (dispatch, getState) => {
    return axios.get(`https://www.goodreads.com/book/show.xml?key=DEZZre4OeBQSqC0L3wQQ&id=${bookId}`)
    .then((response) => {
      var result = convert.xml2js(response.data, {compact: true});
      var bookDataResult = result.GoodreadsResponse.book;
      dispatch({type: types.RESULTS_FETCHED, payload: bookDataResult});
    })
    .catch(() => {
      console.log('Error fetching results...');
    })
  }
}

export function fetchBookReviews(authorName, bookTitle) {
  return (dispatch, getState) => {
    return axios.get(`https://www.goodreads.com/book/title.xml?author=${authorName}&key=DEZZre4OeBQSqC0L3wQQ&title=${bookTitle}`)
    .then((response) => {
      var result = convert.xml2js(response.data, {compact: true});
      var reviewResult = result.GoodreadsResponse;
      dispatch({type: types.REVIEWS_FETCHED, payload: reviewResult});
    })
    .catch(() => {
      console.log('Error fetching reviews...');
    })
  }
}

export function fetchBookByKeyWord(keyword) {
  return (dispatch) => {
    return axios.get(`https://www.goodreads.com/search/index.xml?key=DEZZre4OeBQSqC0L3wQQ&q=${keyword}`)
    .then((response) => {
      var result = convert.xml2js(response.data, {compact: true});
      console.log('action result', result);
      var searchResult = Object.keys(result.GoodreadsResponse.search.results).length ? result.GoodreadsResponse.search.results.work.slice(0,5) : [];
      var totalResponse = result.GoodreadsResponse.search['total-results']._text;
      dispatch({type: types.RESULTS_FETCHED, payload: { searchResult, totalResponse }});
    })
    .catch(() => {
      console.log('Error fetching reviews...');
    })
  }
}
