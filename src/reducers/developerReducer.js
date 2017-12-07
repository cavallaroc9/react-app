import { ADD_DEVELOPER, CLEAR_DEVELOPERS } from '../actions/developersAction';

const initialState = {
  developerList: []
};

export default (state = initialState, action) => {
  if (action.type === ADD_DEVELOPER) {
    return {
      ...state,
      developerList: [
        ...state.developerList,
        action.newDeveloper
      ]
    }
  } else if (action.type === CLEAR_DEVELOPERS) {
    return {
      ...state,
      developerList: []
    };
  }

  return state;
};
