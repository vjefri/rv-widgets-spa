import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SideBar from '../components/SideBar';
import DashUsers from './DashUsers';
import DashWidgets from './DashWidgets';
import DashboardBoxes from '../components/DashboardBoxes';
import { getWidgets } from '../actions/widgets';
import { getUsers } from '../actions/users';

class Dashboard extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(getUsers());
    dispatch(getWidgets());
  }

  render () {
    const { users, widgets } = this.props;

    return (
      <div>
        <DashboardBoxes usersLength={users.length} widgetsLength={widgets.length} />
        <div className='row'>
          {users ? <DashUsers users={users} /> : console.log('loading...')}
          {widgets ? <DashWidgets widgets={widgets.slice(0, 10)} /> : console.log('loading...')}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func,
  users: PropTypes.arrayOf(React.PropTypes.object),
  widgets: PropTypes.arrayOf(React.PropTypes.object)
};

function mapStateToProps (state) {
  return {
    users: state.users.users,
    widgets: state.widgets.widgets
  };
}

export default connect(mapStateToProps)(Dashboard);
