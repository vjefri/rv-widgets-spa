import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SideBar from '../components/SideBar';
import Users from '../components/Users';
import Widgets from '../components/Widgets';
import DashboardBoxes from '../components/DashboardBoxes';

class Dashboard extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <DashboardBoxes />
        <div className='row'>
          <Users />
          <Widgets />
        </div>
      </div>
    );
  }
}

Dashboard.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps (state) {
  return {
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({}, dispatch);
}

Dashboard.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
