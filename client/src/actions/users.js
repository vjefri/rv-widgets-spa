import axios from 'axios';

import * as CONSTANT from '../constants/';

const url = 'http://spa.tglrw.com:4000';

// Get All User Data

function UserRequest () {
  return {
    type: CONSTANT.GET_USERS_REQUEST
  };
}

function UserSuccess (users) {
  return {
    type: CONSTANT.GET_USERS_SUCCESS,
    users: users.data,
    error: null
  };
}

function UserFailure (err) {
  return {
    type: CONSTANT.GET_USERS_FAILURE,
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
    type: CONSTANT.GET_SINGLE_USER_REQUEST
  };
}

function SingleUserSuccess (currentUser) {
  return {
    type: CONSTANT.GET_SINGLE_USER_SUCCESS,
    currentUser: currentUser.data,
    error: null
  };
}

function SingleUserFailure (err) {
  return {
    type: CONSTANT.GET_SINGLE_USER_FAILURE,
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
