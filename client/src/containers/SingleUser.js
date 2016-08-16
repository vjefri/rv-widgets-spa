import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SingleUser extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { currentUser } = this.props;

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
                      {currentUser ? currentUser.id : console.log('loading...')}
                    </td>
                    <td>
                      {currentUser ? currentUser.name : console.log('loading...')}
                    </td>
                    <td>
                      <img src={currentUser ? currentUser.gravatar : console.log('loading...')} />
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

SingleUser.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps (state) {
  return {
    currentUser: state.main.currentUser
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({}, dispatch);
}

SingleUser.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser);
