import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { getWidget } from '../actions';

class WidgetDetail extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const { widgetId } = this.props ? this.props.params : this.props.params;
    this.props.getWidget(widgetId);
  }

  render () {
    const { currentWidget } = this.props;

    return (
      <div className='row'>
        <div className='col-lg-12'>
          <div className='widget'>
            <div className='widget-header'>
              Users
              <div className='pull-right'>
                {currentWidget ? <Link to={`/editWidget/${currentWidget.id}`}>
                                 <button className='btn btn-sm btn-info'>
                                   + Edit
                                 </button>
                                 </Link> : console.log('loading...')}
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
                    <th>
                      Color
                    </th>
                    <th>
                      Price
                    </th>
                    <th>
                      Melts?
                    </th>
                    <th>
                      Inventory
                    </th>
                  </tr>
                </thead>
                {currentWidget ?
                   <tbody>
                     <tr>
                       <td>
                         {currentWidget.id}
                       </td>
                       <td>
                         {currentWidget.name}
                       </td>
                       <td className='text-center'>
                         {currentWidget.color}
                       </td>
                       <td>
                         {currentWidget.price}
                       </td>
                       <td>
                         {currentWidget.melts}
                       </td>
                       <td>
                         {currentWidget.inventory}
                       </td>
                     </tr>
                   </tbody>
                   : console.log('pending...')}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WidgetDetail.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps (state) {
  return {
    currentWidget: state.main.currentWidget
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({getWidget}, dispatch);
}

WidgetDetail.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetDetail);
