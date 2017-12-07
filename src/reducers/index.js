import { combineReducers } from 'redux';

// Reducers
import developerReducer from './developerReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  developerInfo: developerReducer,
  userInfo: userReducer
});

export default reducer;
