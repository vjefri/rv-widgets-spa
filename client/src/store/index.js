import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import rootReducer from '../reducers';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore);

export default function storeConfig (initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
};
