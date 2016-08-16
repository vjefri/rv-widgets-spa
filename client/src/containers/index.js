import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SideBar from '../components/SideBar';

export class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='app'>
        <SideBar />
        <div className='container'>
          {this.props.children}
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
