import React, { Component, PropTypes } from 'react';

class HeaderBar extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className='row header col-xs-12'>
        <div className='user pull-right'>
          <div className='item dropdown'>
            <a href='#' className='dropdown-toggle'><img src='https://goo.gl/fZBPUZ' alt='' /></a>
          </div>
        </div>
        <div className='meta'>
          <div className='page'>
            Dashboard
          </div>
          <div className='breadcrumb-links'>
            Home / Dashboard
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBar;
