import * as ACTIONS from '../constants/';

const INITIAL_STATE = {};

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
    case ACTIONS.GET_WIDGETS_REQUEST:
      return {
        ...state,
        isFetching: false,
      };
    case ACTIONS.GET_WIDGETS_SUCCESS:
      return {
        ...state,
        widgets: action.widgets,
        isFetching: false,
      };
    case ACTIONS.GET_WIDGETS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};
