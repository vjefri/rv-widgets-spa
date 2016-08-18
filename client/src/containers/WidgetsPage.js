import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';

import { getWidget, getWidgets } from '../actions/widgets';
import Search from '../components/Search';

class WidgetsPage extends Component {
  constructor (props) {
    super(props);
    this.state = {filteredList: [] };
    this.handleCreate = this.handleCreate.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(getWidgets());
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
              <div className='pull-right'>
                <button className='btn btn-sm btn-info' onClick={this.handleCreate}>
                  + Create
                </button>
              </div>
              <Search handleSearch={this.handleSearch} />
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
                <tbody>
                  {this.state.filteredList.map((widget, key) => {
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
