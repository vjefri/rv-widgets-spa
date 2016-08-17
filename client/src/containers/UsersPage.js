import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory, Link } from 'react-router';

import { getUsers } from '../actions';

class UsersPage extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    if (!this.props.users) {
      this.props.getUsers();
    }
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
                               <td>
                                 <a>
                                   <Link to={`/user/${user.id}`}>
                                   {user.name} </Link>
                                 </a>
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

UsersPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps (state) {
  return {
    users: state.main.users
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({getUsers}, dispatch);
}

UsersPage.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
