import {combineReducers} from 'redux';
import searchInput from './SearchInputReducer';

const rootReducer = combineReducers({
  searchInput
});

export default rootReducer;