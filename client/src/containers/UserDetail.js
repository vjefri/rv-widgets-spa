import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../actions/users';

class UserDetail extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const { userId } = this.props.params;
    const { dispatch } = this.props;
    dispatch(getUser(userId));
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

UserDetail.propTypes = {
};

function mapStateToProps (state) {
  return {
    currentUser: state.users.currentUser
  };
}

export default connect(mapStateToProps)(UserDetail);
