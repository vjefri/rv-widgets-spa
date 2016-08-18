import * as CONSTANT from '../constants/';

const INITIAL_STATE = {
  widgets: [],
  currentWidget: {},
  isFetching: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANT.GET_WIDGETS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case CONSTANT.GET_WIDGETS_SUCCESS:
      return {
        ...state,
        widgets: action.widgets,
        isFetching: false,
      };
    case CONSTANT.GET_WIDGETS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case CONSTANT.GET_SINGLE_WIDGET_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case CONSTANT.GET_SINGLE_WIDGET_SUCCESS:
      return {
        ...state,
        currentWidget: action.currentWidget,
        isFetching: false,
      };
    case CONSTANT.GET_SINGLE_WIDGET_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case CONSTANT.POST_WIDGET_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case CONSTANT.POST_WIDGET_SUCCESS:
      return {
        ...state,
        widget: action.widget,
        isFetching: false,
      };
    case CONSTANT.POST_WIDGET_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case CONSTANT.EDIT_WIDGET_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case CONSTANT.EDIT_WIDGET_SUCCESS:
      return {
        ...state,
        widget: action.widget,
        isFetching: false,
      };
    case CONSTANT.EDIT_WIDGET_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};