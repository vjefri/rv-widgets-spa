import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory, Link } from 'react-router';
import _ from 'lodash';

import { getWidget, getWidgets } from '../actions';
import Search from '../components/Search';

class WidgetsLong extends Component {
  constructor (props) {
    super(props);
    this.state = {filteredList: null };
    this.handleCreate = this.handleCreate.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount () {
    if (!this.props.users) {
      this.props.getWidgets();
    }
    this.setState({filteredList: this.props.widgets });
  }

  handleCreate (e) {
    e.preventDefault();
    browserHistory.push('/createWidget');
  }

  handleSearch (e) {
    var search = e.target.value;
    let filteredList = this.props.widgets.filter(function (item) {
      return item.name.match(`^${search}`);
    });
    this.setState({filteredList: filteredList});
  }

  render () {
    return (
      <div className='row'>
        <div className='col-lg-12'>
          <div className='widget'>
            <div className='widget-header'>
              Widgets
              <Search handleSearch={this.handleSearch} />
              <div className='pull-right'>
                <button className='btn btn-sm btn-info' onClick={this.handleCreate}>
                  + Create
                </button>
              </div>
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
                      Color
                    </th>
                    <th>
                      Price
                    </th>
                    <th>
                      Melts?
                    </th>
                    <th>
                      Inventory
                    </th>
                  </tr>
                </thead>
                {this.state.filteredList ?
                   <tbody>
                     {_.map(this.state.filteredList, (widget, key) => {
                        return (<tr key={key}>
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
                                </tr>);
                      })}
                   </tbody> : console.log('loading')}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WidgetsLong.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps (state) {
  return {
    widgets: state.main.widgets
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({getWidget, getWidgets}, dispatch);
}

WidgetsLong.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsLong);
