import React from 'react';

const Widgets = props => {
  return (
    <div className='col-lg-6'>
      <div className='widget'>
        <div className='widget-header'>
          Widgets
          <div className='pull-right'>
            <input type='text' className='form-control input-sm' />
          </div>
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
              <tr>
                <td className='text-center'>
                  1
                </td>
                <td>
                  A
                </td>
              </tr>
              <tr>
                <td className='text-center'>
                  2
                </td>
                <td>
                  B
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
