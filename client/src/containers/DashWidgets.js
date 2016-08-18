import React from 'react';
import { Link } from 'react-router';

const DashWidgets = props => {

  return (
    <div className='col-lg-6'>
      <div className='widget'>
        <div className='widget-header'>
          Widgets
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
              {props.widgets.map((widget, index) => {
                 return (<tr key={index}>
                           <td className='text-center'>
                             {widget.id}
                           </td>
                           <td>
                             <Link to={`/widget/${widget.id}`}>
                             {widget.name}
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

export default DashWidgets;
