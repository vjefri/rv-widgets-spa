import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import { getUser, getUsers } from '../actions';

class UsersLong extends Component {
  constructor (props) {
    super(props);
    this.handleUserDetails = this.handleUserDetails.bind(this);
  }

  componentDidMount () {
    if (this.props.users === undefined) {
      this.props.getUsers();
    }
  }

  handleUserDetails (id) {
    this.props.getUser(id);
    browserHistory.push('/user');
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
                  {_.map(this.props.users, (user, key) => {
                     return (<tr key={key}>
                               <td className='text-center'>
                                 {user.id}
                               </td>
                               <td onClick={this.handleUserDetails.bind(null, user.id)}>
                                 {user.name}
                               </td>
                               <td>
                                 <img src={user.gravatar} />
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

UsersLong.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps (state) {
  return {
    users: state.main.users
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({getUser, getUsers}, dispatch);
}

UsersLong.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersLong);
