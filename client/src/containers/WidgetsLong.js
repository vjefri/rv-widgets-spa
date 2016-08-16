import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class WidgetsLong extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='row'>
        <div className='col-lg-12'>
          <div className='widget'>
            <div className='widget-header'>
              Widgets
              <div className='pull-right'>
                <button className='btn btn-sm btn-info'>
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
                  <tr>
                    <td className='text-center'>
                      1
                    </td>
                    <td>
                      Foo
                    </td>
                    <td>
                      red
                    </td>
                    <td>
                      $4.99
                    </td>
                    <td>
                      yes
                    </td>
                    <td>
                      27
                    </td>
                  </tr>
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
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({}, dispatch);
}

WidgetsLong.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsLong);
