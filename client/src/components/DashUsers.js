import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

import Search from './Search';

const DashUsers = props => {
  return (
    <div className='col-lg-6'>
      <div className='widget'>
        <div className='widget-header'>
          Users
          <Search name='Search Users' />
        </div>
        <div className='table-responsive'>
          <table className='table'>
            <thead>
              <tr>
                <th className='text-center'>
                  ID
                </th>
                <th>
                  Name
                </th>
              </tr>
            </thead>
            <tbody>
              {_.map(props.users, (user, key) => {
                 return (<tr key={key}>
                           <td className='text-center'>
                             {user.id}
                           </td>
                           <td>
                             <Link to={`/user/${user.id}`}>
                             {user.name}
                             </Link>
                           </td>
                         </tr>);
               })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashUsers;
