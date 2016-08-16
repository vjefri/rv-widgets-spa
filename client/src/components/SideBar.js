import React from 'react';
import { Link } from 'react-router';

const SideBar = props => {
  return (
    <nav>
      <div id='sidebar-wrapper'>
        <ul className='sidebar'>
          <li className='sidebar-main'>
            <Link to={'/'}>
            <span className='menu-icon fa fa-tachometer'></span>
            </Link>
          </li>
          <li className='sidebar-title'>
            <span>NAVIGATION</span>
          </li>
          <li className='sidebar-list'>
            <Link to={'/'}> Dashboard <span className='menu-icon fa fa-tachometer'></span>
            </Link>
          </li>
          <li className='sidebar-list'>
            <Link to={'/users'}> Users <span className='menu-icon fa menu-icon fa fa-users'></span>
            </Link>
          </li>
          <li className='sidebar-list'>
            <Link to={'/widgets'}> Widgets <span className='menu-icon fa fa-cubes'></span>
            </Link>
          </li>
        </ul>
        <div className='sidebar-footer col-xs-12'>
          <a href='#' target='_blank'>© 2015 Red Ventures</a>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
