import React from 'react';
import { Link } from 'react-router';

const NavBar = props => {
  return (
    <nav>
      <div id='sidebar-wrapper'>
        <ul class='sidebar'>
          <li class='sidebar-main'>
            <Link to={'/'}> Dashboard
            <span class='menu-icon fa fa-tachometer'></span>
            </Link>
          </li>
        </ul>
        <div class='sidebar-footer col-xs-12'>
          <a href='#' target='_blank'>© 2015 Red Ventures</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
