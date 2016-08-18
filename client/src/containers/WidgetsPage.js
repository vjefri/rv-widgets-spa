import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import SearchInput, { createFilter } from 'react-search-input';

import { getWidget, getWidgets } from '../actions/widgets';

class WidgetsPage extends Component {
  constructor (props) {
    super(props);
    this.state = {searchTerm: ''};
    this.handleCreate = this.handleCreate.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(getWidgets());
  }

  handleCreate (e) {
    e.preventDefault();
    browserHistory.push('/createWidget');
  }

  handleSearch (term) {
    this.setState({searchTerm: term});
  }

  render () {
    const { widgets } = this.props;
    const KEYS_TO_FILTERS = ['id', 'name', 'color', 'price', 'melts', 'inventory'];
    const filteredWidgets = widgets.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

    return (
      <div className='row'>
        <div className='col-lg-12'>
          <div className='widget'>
            <div className='widget-header'>
              Widgets
              <div className='pull-right'>
                <button className='btn btn-sm btn-info' onClick={this.handleCreate}>
                  + Create
                </button>
              </div>
              <SearchInput className='pull-right' onChange={this.handleSearch} />
            </div>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th className='text-center'>
                      ID
                    </th>
                    {['Name', 'Color', 'Price', 'Melts?', 'Inventory'].map((field) => <th>{field}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {filteredWidgets.map((widget, key) => {
                     return (
                       <tr key={key}>
                         <td>
                           {widget.id}
                         </td>
                         <td>
                           <Link to={`/widget/${widget.id}`}>
                           {widget.name}
                           </Link>
                         </td>
                         <td className='text-center'>
                           {widget.color}
                         </td>
                         <td>
                           {widget.price}
                         </td>
                         <td>
                           {widget.melts}
                         </td>
                         <td>
                           {widget.inventory}
                         </td>
                       </tr>
                     );
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

WidgetsPage.contextTypes = {
  router: PropTypes.object
};

WidgetsPage.propTypes = {
  dispatch: PropTypes.func,
  widgets: PropTypes.arrayOf(React.PropTypes.object)
};

function mapStateToProps (state) {
  return {
    widgets: state.widgets.widgets
  };
}

export default connect(mapStateToProps)(WidgetsPage);
