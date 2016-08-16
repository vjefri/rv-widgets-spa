import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SideBar from '../components/SideBar';
import Users from '../components/Users';
import Widgets from '../components/Widgets';
import DashboardBoxes from '../components/DashboardBoxes';
import { getUsers, getWidgets } from '../actions';

class Dashboard extends Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.getUsers();
    this.props.getWidgets();
  }

  render () {
    return (
      <div>
        <DashboardBoxes usersLength={this.props.usersLength} widgetsLength={this.props.widgetsLength} />
        <div className='row'>
          <Users users={this.props.users} />
          <Widgets widgets={this.props.widgets} />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
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
