import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import main from './main';

export default combineReducers({
  main: main,
  form: formReducer
});
