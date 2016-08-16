import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class WidgetsPage extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='row'>
        <div className='col-lg-12'>
          <div className='widget'>
            <div className='widget-header'>
              Create/Edit Template
            </div>
            <div className='widget-body'>
              <form className='form-horizontal'>
                <legend>
                  Create Widget
                </legend>
                <div className='controls'>
                  Name
                  <input
                    id='widget-name'
                    name='widget-name'
                    type='text'
                    placeholder='foo-bar'
                    className='input-medium' />
                </div>
                <div className='controls'>
                  <div className='input-prepend'>
                    Price
                    <span className='add-on'>$</span>
                    <input
                      id='widget-price'
                      name='widget-price'
                      className='input-medium'
                      placeholder='0.00'
                      type='text' />
                  </div>
                </div>
                <div className='controls'>
                  Color
                  <select id='widget-color' name='widget-color' className='input-large'>
                    <option>
                      red
                    </option>
                    <option>
                      purple
                    </option>
                    <option>
                      black
                    </option>
                    <option>
                      green
                    </option>
                    <option>
                      magenta
                    </option>
                    <option>
                      white
                    </option>
                    <option>
                      depends on the viewing angle
                    </option>
                  </select>
                </div>
                <div className='controls'>
                  Melts
                  <input
                    type='checkbox'
                    name='widget-properties'
                    id='widget-properties-0'
                    value='melts' />
                </div>
                <div className='controls'>
                  Inventory
                  <input
                    id='widget-count'
                    name='widget-count'
                    type='text'
                    placeholder='#?'
                    className='input-small' />
                </div>
              </form>
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

function mapStateToProps (state) {
  return {
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({}, dispatch);
}

WidgetsPage.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsPage);
