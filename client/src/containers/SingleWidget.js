import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SingleWidget extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { currentWidget } = this.props;

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
                    <td>
                      {currentWidget ? currentWidget.id : console.log('pending...')}
                    </td>
                    <td>
                      {currentWidget ? currentWidget.name : console.log('pending...')}
                    </td>
                    <td className='text-center'>
                      {currentWidget ? currentWidget.color : console.log('pending...')}
                    </td>
                    <td>
                      {currentWidget ? currentWidget.price : console.log('pending...')}
                    </td>
                    <td>
                      {currentWidget ? currentWidget.melts : console.log('pending...')}
                    </td>
                    <td>
                      {currentWidget ? currentWidget.inventory : console.log('pending...')}
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

SingleWidget.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps (state) {
  return {
    currentWidget: state.main.currentWidget
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({}, dispatch);
}

SingleWidget.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleWidget);
