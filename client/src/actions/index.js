import axios from 'axios';

import * as ACTIONS from '../constants/';

const url = 'http://spa.tglrw.com:4000';

// Get All User Data

function UserRequest () {
  return {
    type: ACTIONS.GET_USERS_REQUEST
  };
}

function UserSuccess (users) {
  const usersLength = users.data.length;

  return {
    type: ACTIONS.GET_USERS_SUCCESS,
    users: users.data,
    usersLength: usersLength,
    error: null
  };
}

function UserFailure (err) {
  return {
    type: ACTIONS.GET_USERS_FAILURE,
    error: err
  };
}

export function getUsers () {
  return dispatch => {
    dispatch(UserRequest());
    return axios.get(`${url}/users`)
      .then(response => dispatch(UserSuccess(response)))
      .catch(err => dispatch(UserFailure(err)));
  };
};

// Get Single User 

function SingleUserRequest () {
  return {
    type: ACTIONS.GET_SINGLE_USER_REQUEST
  };
}

function SingleUserSuccess (currentUser) {
  return {
    type: ACTIONS.GET_SINGLE_USER_SUCCESS,
    currentUser: currentUser.data,
    error: null
  };
}

function SingleUserFailure (err) {
  return {
    type: ACTIONS.GET_SINGLE_USER_FAILURE,
    error: err
  };
}

export function getUser (id) {
  return dispatch => {
    dispatch(SingleUserRequest());
    return axios.get(`${url}/users/${id}`)
      .then(response => dispatch(SingleUserSuccess(response)))
      .catch(err => dispatch(SingleUserFailure(err)));
  };
};

// Get All Widget Data

function WidgetRequest () {
  return {
    type: ACTIONS.GET_WIDGETS_REQUEST
  };
}

function WidgetSuccess (widgets) {
  const widgetsLength = widgets.data.length;

  return {
    type: ACTIONS.GET_WIDGETS_SUCCESS,
    widgets: widgets.data,
    widgetsLength: widgetsLength,
    error: null
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
    currentWidget: currentWidget.data,
    error: null
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

function PostWidgetSuccess (data) {
  return {
    type: ACTIONS.POST_WIDGET_SUCCESS,
    data: data.data,
    error: null
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

function EditWidgetSuccess (data) {
  return {
    type: ACTIONS.EDIT_WIDGET_SUCCESS,
    data: data.data,
    error: null
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
