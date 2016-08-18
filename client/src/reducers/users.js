import * as ACTIONS from '../constants/';

const INITIAL_STATE = {
  users: [],
  currentUser: {},
  isFetching: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_USERS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case ACTIONS.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        isFetching: false,
      };
    case ACTIONS.GET_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case ACTIONS.GET_SINGLE_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ACTIONS.GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.currentUser,
        isFetching: false,
      };
    case ACTIONS.GET_SINGLE_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};
