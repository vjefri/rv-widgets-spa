import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class WidgetsPage extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div class='row'>
        <div class='col-lg-12'>
          <div class='widget'>
            <div class='widget-header'>
              Create/Edit Template
            </div>
            <div class='widget-body'>
              <form class='form-horizontal'>
                <legend>
                  Create Widget
                </legend>
                <div class='controls'>
                  Name
                  <input
                    id='widget-name'
                    name='widget-name'
                    type='text'
                    placeholder='foo-bar'
                    class='input-medium' />
                </div>
                <div class='controls'>
                  <div class='input-prepend'>
                    Price
                    <span class='add-on'>$</span>
                    <input
                      id='widget-price'
                      name='widget-price'
                      class='input-medium'
                      placeholder='0.00'
                      type='text' />
                  </div>
                </div>
                <div class='controls'>
                  Color
                  <select id='widget-color' name='widget-color' class='input-large'>
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
                <div class='controls'>
                  Melts
                  <input
                    type='checkbox'
                    name='widget-properties'
                    id='widget-properties-0'
                    value='melts' />
                </div>
                <div class='controls'>
                  Inventory
                  <input
                    id='widget-count'
                    name='widget-count'
                    type='text'
                    placeholder='#?'
                    class='input-small' />
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
