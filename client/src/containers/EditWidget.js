import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

import { getWidget } from '../actions';

class EditWidget extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const { widgetId } = this.props ? this.props.params : this.props.params;
    dispatch(this.getWidget(widgetId));
    console.log(widgetId);
  }

  handleSubmit (values, dispatch) {}

  render () {
    const { currentWidget } = this.props;
    const {fields: { name, price, color, melts, inventory }, handleSubmit, submitting} = this.props;
    return (
      <div className='row'>
        <div className='col-lg-12'>
          <div className='widget'>
            <div className='widget-body'>
              <form className='form-horizontal' onSubmit={handleSubmit(this.handleSubmit)}>
                <legend>
                  Edit Widget
                </legend>
                <div className='controls'>
                  Name
                  <input
                    id='widget-name'
                    name='widget-name'
                    type='text'
                    placeholder={currentWidget ? currentWidget.name : 'Tyrion Lannister'}
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
                      placeholder={currentWidget ? currentWidget.price : 'I always pay my debts'}
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
                    placeholder={currentWidget ? currentWidget.color : 'red'}
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
                    placeholder={currentWidget ? currentWidget.melts : false}
                    {...melts}/>
                </div>
                <div className='controls'>
                  Inventory
                  <input
                    id='widget-count'
                    name='widget-count'
                    type='text'
                    placeholder={currentWidget ? currentWidget.inventory : 'One Dragon'}
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

EditWidget.PropTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  fields: PropTypes.object,
  editWidget: PropTypes.func
};

function mapStateToProps (state) {
  return {
    data: state.form.EditWidget,
    currentWidget: state.main.currentWidget
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({getWidget}, dispatch);
}

export default reduxForm({
  form: 'EditWidget',
  fields: ['name', 'price', 'color', 'melts', 'inventory']
}, mapStateToProps, mapDispatchToProps)(EditWidget);
