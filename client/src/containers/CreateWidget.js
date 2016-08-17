import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';

import { addWidget } from '../actions';

class CreateWidget extends Component {
  constructor (props) {
    super(props);
  }

  handleSubmit (values, dispatch) {
    dispatch(addWidget(values));
  }

  render () {
    const {fields: { name, price, color, melts, inventory }, handleSubmit, submitting} = this.props;
    return (
      <div className='row'>
        <div className='col-lg-12'>
          <div className='widget'>
            <div className='widget-body'>
              <form className='form-horizontal' onSubmit={handleSubmit(this.handleSubmit)}>
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
                    className='input-medium'
                    {...name}/>
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
                      type='text'
                      {...price}/>
                  </div>
                </div>
                <div className='controls'>
                  Color
                  <select
                    id='widget-color'
                    name='widget-color'
                    className='input-large'
                    {...color}>
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
                    value='melts'
                    {...melts}/>
                </div>
                <div className='controls'>
                  Inventory
                  <input
                    id='widget-count'
                    name='widget-count'
                    type='text'
                    placeholder='#?'
                    className='input-small'
                    {...inventory}/>
                </div>
                <button type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateWidget.PropTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  fields: PropTypes.object,
  addWidget: PropTypes.func
};

function mapStateToProps (state) {
  return {
    data: state.form.CreateWidget
  };
}

export default reduxForm({
  form: 'CreateWidget',
  fields: ['name', 'price', 'color', 'melts', 'inventory']
}, mapStateToProps)(CreateWidget);
