import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import users from './users';
import widgets from './widgets';

export default combineReducers({
  users: users,
  widgets: widgets,
  form: formReducer
});
