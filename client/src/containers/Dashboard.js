import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import SideBar from '../components/SideBar';
import DashUsers from '../components/DashUsers';
import DashWidgets from '../components/DashWidgets';
import DashboardBoxes from '../components/DashboardBoxes';
import { getUsers, getWidgets } from '../actions';

class Dashboard extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.getUsers();
    this.props.getWidgets();
  }

  render () {
    const { users, widgets, usersLength, widgetsLength } = this.props;
    return (
      <div>
        <DashboardBoxes usersLength={usersLength} widgetsLength={widgetsLength} />
        <div className='row'>
          {users ? <DashUsers users={users} /> : console.log('loading...')}
          {widgets ? <DashWidgets widgets={widgets.slice(0, 10)} /> : console.log('loading...')}
        </div>
      </div>
    );
  }
}

Dashboard.contextTypes = {
  router: PropTypes.object
};

Dashboard.propTypes = {
  users: PropTypes.arrayOf(React.PropTypes.object),
  widgets: PropTypes.arrayOf(React.PropTypes.object)
};

function mapStateToProps (state) {
  return {
    users: state.main.users,
    usersLength: state.main.usersLength,
    widgets: state.main.widgets,
    widgetsLength: state.main.widgetsLength
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({getUsers, getWidgets}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
