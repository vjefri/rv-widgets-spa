import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import SearchInput, { createFilter } from 'react-search-input';
import { getWidgets } from '../actions/widgets';

class DashWidgets extends Component {
  constructor (props) {
    super(props);
    this.state = {searchTerm: ''};
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(getWidgets());
  }

  handleSearch (term) {
    this.setState({searchTerm: term});
  }

  render () {
    const {widgets} = this.props;
    const KEYS_TO_FILTERS = ['id', 'name'];
    const filteredWidgets = widgets.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

    return (
      <div className='col-lg-6'>
        <div className='widget'>
          <div className='widget-header'>
            Widgets
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
                {filteredWidgets.slice(0, 10).map((widget, index) => {
                   return (
                     <tr key={index}>
                       <td className='text-center'>
                         {widget.id}
                       </td>
                       <td>
                         <Link to={`/widget/${widget.id}`}>
                         {widget.name}
                         </Link>
                       </td>
                     </tr>
                   );
                 })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

DashWidgets.propTypes = {
  dispatch: PropTypes.func,
  widgets: PropTypes.arrayOf(React.PropTypes.object)
};

function mapStateToProps (state) {
  return {
    widgets: state.widgets.widgets
  };
}

export default connect(mapStateToProps)(DashWidgets);
