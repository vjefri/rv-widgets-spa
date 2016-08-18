import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getUsers } from '../actions/users';

class UsersPage extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(getUsers());
  }

  render () {
    const {users} = this.props;
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
                  {users.map((user, key) => {
                     return (<tr key={key}>
                               <td className='text-center'>
                                 {user.id}
                               </td>
                               <td>
                                 <Link to={`/user/${user.id}`}>
                                 {user.name}
                                 </Link>
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

UsersPage.propTypes = {
  dispatch: PropTypes.func,
  users: PropTypes.arrayOf(React.PropTypes.object)
};

function mapStateToProps (state) {
  return {
    users: state.users.users
  };
}

export default connect(mapStateToProps)(UsersPage);
