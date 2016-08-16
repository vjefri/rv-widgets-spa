import fetch from 'isomorphic-fetch';

import * as ACTIONS from '../constants/';

const url = 'http://spa.tglrw.com:4000';

// Get All User Data

function UserRequest () {
  return {
    type: ACTIONS.GET_USERS_REQUEST
  };
}

function UserSuccess (users) {
  const usersLength = users.length;

  return {
    type: ACTIONS.GET_USERS_SUCCESS,
    users: users,
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
    return fetch(`${url}/users`, {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        return dispatch(UserSuccess(data));
      })
      .catch(err => dispatch(UserFailure(err)));
  };
};

// Single User 

function SingleUserRequest () {
  return {
    type: ACTIONS.GET_SINGLE_USER_REQUEST
  };
}

function SingleUserSuccess (currentUser) {
  return {
    type: ACTIONS.GET_SINGLE_USER_SUCCESS,
    currentUser: currentUser,
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
    return fetch(`${url}/users/${id}`, {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        return dispatch(SingleUserSuccess(data));
      })
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
  const widgetsLength = widgets.length;

  return {
    type: ACTIONS.GET_WIDGETS_SUCCESS,
    widgets: widgets,
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
    return fetch(`${url}/widgets`, {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        return dispatch(WidgetSuccess(data));
      })
      .catch(err => dispatch(WidgetFailure(err)));
  };
};

// Single Widget 

function SingleWidgetRequest () {
  return {
    type: ACTIONS.GET_SINGLE_WIDGET_REQUEST
  };
}

function SingleWidgetSuccess (currentWidget) {
  return {
    type: ACTIONS.GET_SINGLE_WIDGET_SUCCESS,
    currentWidget: currentWidget,
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
    return fetch(`${url}/widgets/${id}`, {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        return dispatch(SingleWidgetSuccess(data));
      })
      .catch(err => dispatch(SingleWidgetFailure(err)));
  };
};

// Post Widget

function PostWidgetRequest () {
  return {
    type: ACTIONS.POST_WIDGET_REQUEST
  };
}

function PostWidgetSuccess (data) {
  return {
    type: ACTIONS.POST_WIDGET_SUCCESS,
    data: data,
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
    dispatch(PostWidgetRequest());
    return fetch(`${url}/widgets`, {method: 'POST', body: JSON.stringify(values), mode: 'cors', headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }})
      .then(res => res.json())
      .then(data => {
        return dispatch(PostWidgetSuccess(data));
      })
      .catch(err => dispatch(PostWidgetFailure(err)));
  };
};
