import * as ACTIONS from '../constants/';

const INITIAL_STATE = {
  widgets: [],
  currentWidget: {},
  isFetching: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_WIDGETS_REQUEST:
      return {
        ...state,
        isFetching: true,
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
    case ACTIONS.GET_SINGLE_WIDGET_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ACTIONS.GET_SINGLE_WIDGET_SUCCESS:
      return {
        ...state,
        currentWidget: action.currentWidget,
        isFetching: false,
      };
    case ACTIONS.GET_SINGLE_WIDGET_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case ACTIONS.POST_WIDGET_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ACTIONS.POST_WIDGET_SUCCESS:
      return {
        ...state,
        widget: action.widget,
        isFetching: false,
      };
    case ACTIONS.POST_WIDGET_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case ACTIONS.EDIT_WIDGET_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ACTIONS.EDIT_WIDGET_SUCCESS:
      return {
        ...state,
        widget: action.widget,
        isFetching: false,
      };
    case ACTIONS.EDIT_WIDGET_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};