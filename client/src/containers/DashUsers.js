import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import SearchInput, { createFilter } from 'react-search-input';
import { getUsers } from '../actions/users';

class DashUsers extends Component {
  constructor (props) {
    super(props);
    this.state = {searchTerm: ''};
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(getUsers());
  }

  handleSearch (term) {
    this.setState({searchTerm: term});
  }

  render () {
    const {users} = this.props;
    const KEYS_TO_FILTERS = ['id', 'name'];
    const filteredUsers = users.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

    return (
      <div className='col-lg-6'>
        <div className='widget'>
          <div className='widget-header'>
            Users
            <SearchInput className='pull-right' onChange={this.handleSearch} />
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
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, key) => {
                   return (<tr key={key}>
                             <td className='text-center'>
                               {user.id}
                             </td>
                             <td>
                               <Link to={`/user/${user.id}`}>
                               {user.name}
                               </Link>
                             </td>
                           </tr>);
                 })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

DashUsers.propTypes = {
  dispatch: PropTypes.func,
  users: PropTypes.arrayOf(React.PropTypes.object)
};

function mapStateToProps (state) {
  return {
    users: state.users.users
  };
}

export default connect(mapStateToProps)(DashUsers);
