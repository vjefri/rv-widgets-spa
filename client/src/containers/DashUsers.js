import React from 'react';
import { Link } from 'react-router';

const DashUsers = props => {

  return (
    <div className='col-lg-6'>
      <div className='widget'>
        <div className='widget-header'>
          Users
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
              {props.users.map((user, key) => {
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
