import { ADD_DEVELOPER } from '../actions/developersAction';

export default (state = {developerList: []}, action) => {
  if (action.type === ADD_DEVELOPER) {
    return {
      ...state,
      developerList: [
        ...state.developerList,
        action.newDeveloper
      ]
    }
  }
  return state;
};
