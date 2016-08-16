import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SideBar from '../components/SideBar';
import HeaderBar from '../components/HeaderBar';

export class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div id='page-wrapper' className='open'>
        <SideBar />
        <div id='content-wrapper'>
          <div className='page-content'>
            <HeaderBar />
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
};

App.PropTypes = {

};

function mapStateToProps (state) {
  return {
  };
}

function mapDispatchToProps (dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
