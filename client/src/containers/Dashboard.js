import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import SideBar from '../components/SideBar';
import Users from '../components/Users';
import Widgets from '../components/Widgets';
import DashboardBoxes from '../components/DashboardBoxes';
import { getUsers, getWidgets, getUser, getWidget } from '../actions';

class Dashboard extends Component {
  constructor (props) {
    super(props);
    this.handleUserDetails = this.handleUserDetails.bind(this);
    this.handleWidgetDetails = this.handleWidgetDetails.bind(this);
  }

  componentDidMount () {
    this.props.getUsers();
    this.props.getWidgets();
  }

  handleUserDetails (id) {
    this.props.getUser(id);
    browserHistory.push('/user');
  }

  handleWidgetDetails (id) {
    this.props.getWidget(id);
    browserHistory.push('/widget');
  }

  render () {
    const { users, widgets, usersLength, widgetsLength } = this.props;
    return (
      <div>
        <DashboardBoxes usersLength={usersLength} widgetsLength={widgetsLength} />
        <div className='row'>
          {users ? <Users users={users} handleUserDetails={this.handleUserDetails} /> : console.log('loading...')}
          {widgets ? <Widgets widgets={widgets.slice(0, 10)} handleWidgetDetails={this.handleWidgetDetails} /> : console.log('loading...')}
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
  return bindActionCreators({getUsers, getWidgets, getUser, getWidget}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
