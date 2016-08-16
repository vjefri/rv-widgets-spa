import React from 'react';

const DashboardBoxes = props => {
  return (
    <div className='row'>
      <div className='col-lg-3 col-md-6 col-xs-12'>
        <div className='widget'>
          <div className='widget-header'>
            <div className='widget-icon green pull-left'>
              <i className='fa fa-users'></i>
            </div>
            <div className='title'>
              {props.usersLength}
            </div>
            <div className='comment'>
              Users
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-3 col-md-6 col-xs-12'>
        <div className='widget'>
          <div className='widget-header'>
            <div className='widget-icon green pull-left'>
              <i className='fa fa-users'></i>
            </div>
            <div className='title'>
              {props.widgetsLength}
            </div>
            <div className='comment'>
              Widgets
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBoxes;
