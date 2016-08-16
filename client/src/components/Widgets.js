import React from 'react';

const Widgets = props => {
  return (
    <div class='col-lg-6'>
      <div class='widget'>
        <div class='widget-header'>
          Widgets
          <div class='pull-right'>
            <input type='text' class='form-control input-sm' />
          </div>
        </div>
        <div class='table-responsive'>
          <table class='table'>
            <thead>
              <tr>
                <th class='text-center'>
                  ID
                </th>
                <th>
                  Name
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='text-center'>
                  1
                </td>
                <td>
                  A
                </td>
              </tr>
              <tr>
                <td class='text-center'>
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
