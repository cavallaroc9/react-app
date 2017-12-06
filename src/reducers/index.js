import { combineReducers } from 'redux';
import developerReducer from './developerReducer'

const reducer = combineReducers({
  developerInfo: developerReducer
});

export default reducer;
