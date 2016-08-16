import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UsersLong extends Component {
  constructor (props) {
    super(props);
  }

  render () {
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
  }
}

UsersLong.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps (state) {
  return {
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({}, dispatch);
}

UsersLong.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersLong);
