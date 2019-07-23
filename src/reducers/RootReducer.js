import {combineReducers} from 'redux';
import hotels from './HotelReducer';
import personCount from './PersonReducer';
import totalRoomCount from './RoomReducer';
import featuresArray from './FeaturesReducer';
import value from './SliderReducer';
import bookRoom from './BookRoomReducer';
import totalBill from './CalculateBillReducer';
import userSelectedRooms from './SelectedRoomsReducer';
import maxRoom from './MaxRoomsReducer';
import user from './UserLogin';
import headerRooms from './HeaderRoomsReducer'; 
import configureRoomData from './ConfigureRoomDataReducer';
import paymentBreakDown from './PaymentBreakDown';
import globalLoading from './GlobalLoadingReducer';
import bookings from './BookingsReducer';
import searchInput from './SearchInputReducer';

const rootReducer = combineReducers({
  hotels,
  personCount,
  totalRoomCount,
  featuresArray,
  value,
  bookRoom,
  totalBill,
  userSelectedRooms,
  maxRoom,
  user,
  headerRooms,
  configureRoomData,
  paymentBreakDown,
  globalLoading,
  bookings,
  searchInput
});

export default rootReducer;