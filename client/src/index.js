import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import storeConfig from './store';
// import './styles/main.scss'
// require.context('./styles', true, /^\.\/.*\.css/)

import App from './containers';
import Dashboard from './containers/Dashboard';
import UsersPage from './containers/UsersPage';
import WidgetsPage from './containers/WidgetsPage';
import CreateWidget from './containers/CreateWidget';
import EditWidget from './containers/EditWidget';
import UserDetail from './containers/UserDetail';
import WidgetDetail from './containers/WidgetDetail';

const store = storeConfig();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Dashboard} />
        <Route path='/users' component={UsersPage} />
        <Route path='/widgets' component={WidgetsPage} />
        <Route path='/createWidget' component={CreateWidget} />
        <Route path='/editWidget/:widgetId' component={EditWidget} />
        <Route path='/user/:userId' component={UserDetail} />
        <Route path='/widget/:widgetId' component={WidgetDetail} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
