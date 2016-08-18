import axios from 'axios';

import * as ACTIONS from '../constants/';

const url = 'http://spa.tglrw.com:4000';

// Get All Widget Data

function WidgetRequest () {
  return {
    type: ACTIONS.GET_WIDGETS_REQUEST
  };
}

function WidgetSuccess (widgets) {
  return {
    type: ACTIONS.GET_WIDGETS_SUCCESS,
    widgets: widgets.data
  };
}

function WidgetFailure (err) {
  return {
    type: ACTIONS.GET_WIDGETS_FAILURE,
    error: err
  };
}

export function getWidgets () {
  return dispatch => {
    dispatch(WidgetRequest());
    return axios.get(`${url}/widgets`)
      .then(response => dispatch(WidgetSuccess(response)))
      .catch(err => dispatch(WidgetFailure(err)));
  };
};

// Get Single Widget 

function SingleWidgetRequest () {
  return {
    type: ACTIONS.GET_SINGLE_WIDGET_REQUEST
  };
}

function SingleWidgetSuccess (currentWidget) {
  return {
    type: ACTIONS.GET_SINGLE_WIDGET_SUCCESS,
    currentWidget: currentWidget.data
  };
}

function SingleWidgetFailure (err) {
  return {
    type: ACTIONS.GET_SINGLE_WIDGET_FAILURE,
    error: err
  };
}

export function getWidget (id) {
  return dispatch => {
    dispatch(SingleWidgetRequest());
    return axios.get(`${url}/widgets/${id}`)
      .then(response => dispatch(SingleWidgetSuccess(response)))
      .catch(err => dispatch(SingleWidgetFailure(err)));
  };
};

// Add Widget

function PostWidgetRequest () {
  return {
    type: ACTIONS.POST_WIDGET_REQUEST
  };
}

function PostWidgetSuccess (widget) {
  return {
    type: ACTIONS.POST_WIDGET_SUCCESS,
    widget: widget.data
  };
}

function PostWidgetFailure (err) {
  return {
    type: ACTIONS.POST_WIDGET_FAILURE,
    error: err
  };
}

export function addWidget (values) {
  return dispatch => {
    dispatch(SingleWidgetRequest());
    return axios.post(`${url}/widgets`, values, { header: { 'Content-type': 'application/json' } })
      .then(response => dispatch(PostWidgetSuccess(response)))
      .catch(err => dispatch(PostWidgetFailure(err)));
  };
};

// Edit Widget

function EditWidgetRequest () {
  return {
    type: ACTIONS.EDIT_WIDGET_REQUEST
  };
}

function EditWidgetSuccess (widget) {
  return {
    type: ACTIONS.EDIT_WIDGET_SUCCESS,
    widget: widget.data
  };
}

function EditWidgetFailure (err) {
  return {
    type: ACTIONS.EDIT_WIDGET_FAILURE,
    error: err
  };
}

export function editWidget (values, d, id) {
  return dispatch => {
    dispatch(EditWidgetRequest());
    return axios.put(`${url}/widgets/${id}`, values, { header: { 'Content-type': 'application/json' } })
      .then(response => dispatch(EditWidgetSuccess(response)))
      .catch(err => dispatch(EditWidgetFailure(err)));
  };
};
