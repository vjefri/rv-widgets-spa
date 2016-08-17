import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUser } from '../actions';

class UserDetail extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const { userId } = this.props ? this.props.params : this.props.params;
    this.props.getUser(userId);
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
                  {currentUser ?
                     <tr>
                       <td className='text-center'>
                         {currentUser.id}
                       </td>
                       <td>
                         {currentUser.name}
                       </td>
                       <td>
                         <img src={currentUser.gravatar} />
                       </td>
                     </tr> : console.log('loading...')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserDetail.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps (state) {
  return {
    currentUser: state.main.currentUser
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({getUser}, dispatch);
}

UserDetail.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
