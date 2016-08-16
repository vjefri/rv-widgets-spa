import React from 'react';
import Search from './Search';

const Widgets = props => {

  return (
    <div className='col-lg-6'>
      <div className='widget'>
        <div className='widget-header'>
          Widgets
          <Search name='Search Widgets' />
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
              {_.map(props.widgets, (widget, index) => {
                 return (<tr key={index}>
                           <td className='text-center'>
                             {widget.id}
                           </td>
                           <td onClick={props.handleWidgetDetails.bind(null, widget.id)}>
                             {widget.name}
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

export default Widgets;
