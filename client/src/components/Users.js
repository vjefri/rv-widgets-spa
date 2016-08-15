import React from 'react';

const Users = props => {
  return (
    <div className='row'>
      <div className='col-lg-12'>
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
                  <th>
                    Avatar
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-center'>
                    1
                  </td>
                  <td>
                    JBoss McHuston
                  </td>
                  <td>
                    <img src='https://s.gravatar.com/avatar/e11550b1bf793d43639292b196374262?s=48' />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
