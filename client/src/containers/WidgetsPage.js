import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import { getWidget, getWidgets } from '../actions';

class WidgetsLong extends Component {
  constructor (props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
  }
  componentDidMount () {
    if (!this.props.widgets) {
      this.props.getWidgets();
    }
  }

  handleCreate (e) {
    e.preventDefault();
    browserHistory.push('/createWidget');
  }

  render () {
    return (
      <div className='row'>
        <div className='col-lg-12'>
          <div className='widget'>
            <div className='widget-header'>
              Widgets
              <div className='pull-right'>
                <button className='btn btn-sm btn-info' onClick={this.handleCreate}>
                  + Create
                </button>
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
                <tbody>
                  {_.map(this.props.widgets, (widget, key) => {
                     return (<tr key={key}>
                               <td>
                                 {widget.id}
                               </td>
                               <td>
                                 {widget.name}
                               </td>
                               <td className='text-center'>
                                 {widget.color}
                               </td>
                               <td>
                                 {widget.price}
                               </td>
                               <td>
                                 {widget.melts}
                               </td>
                               <td>
                                 {widget.inventory}
                               </td>
                             </tr>);
                   })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WidgetsLong.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps (state) {
  return {
    widgets: state.main.widgets
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({getWidget, getWidgets}, dispatch);
}

WidgetsLong.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsLong);
