import fetch from 'isomorphic-fetch';

import * as ACTIONS from '../constants/';

const url = 'http://spa.tglrw.com:4000';

// Get User Data

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

// Get Widget Data

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
