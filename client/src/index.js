import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import storeConfig from './store';
import './styles/main.scss';

import App from './containers';
import Dashboard from './containers/Dashboard';
import UsersLong from './containers/UsersLong';
import WidgetsLong from './containers/WidgetsLong';
import CreateWidget from './containers/CreateWidget';
import EditWidget from './containers/EditWidget';

const store = storeConfig();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Dashboard} />
        <Route path='/users' component={UsersLong} />
        <Route path='/widgets' component={WidgetsLong} />
        <Route path='/createWidget' component={CreateWidget} />
        <Route path='/editWidget' component={EditWidget} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
