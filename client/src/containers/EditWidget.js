import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { editWidget } from '../actions/widgets';

class EditWidget extends Component {
  constructor (props) {
    super(props);
  }

  handleSubmit (values, dispatch, widgetId) {
    const { currentWidget } = this.props;

    if (currentWidget) {
      dispatch(editWidget(values, dispatch, currentWidget.id));
    }
  }

  render () {
    const domOnlyProps = ({ initialValue, autofill, onUpdate, valid, invalid, dirty, pristine, active, touched, visited, autofilled, ...domProps }) => domProps

    const { currentWidget } = this.props;
    const {fields: { name, price, color, melts, inventory }, handleSubmit, submitting} = this.props;
    return (
      <div className='row'>
        <div className='col-lg-12'>
          <div className='widget'>
            <div className='widget-body'>
              <form className='form-horizontal' onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
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
                    {...domOnlyProps(name)}/>
                </div>
                <div className='controls'>
                  <div className='input-prepend'>
                    Price
                    <span className='add-on'>$</span>
                    <input
                      id='widget-price'
                      name='widget-price'
                      className='input-medium'
                      placeholder={currentWidget ? currentWidget.price : 100000}
                      type='number'
                      {...domOnlyProps(price)}/>
                  </div>
                </div>
                <div className='controls'>
                  Color
                  <select
                    id='widget-color'
                    name='widget-color'
                    className='input-large'
                    type='radio'
                    placeholder={currentWidget ? currentWidget.color : 'red'}
                    {...domOnlyProps(color)}>
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
                    {...domOnlyProps(melts)}/>
                </div>
                <div className='controls'>
                  Inventory
                  <input
                    id='widget-count'
                    name='widget-count'
                    type='number'
                    placeholder={currentWidget ? currentWidget.inventory : 'One Dragon'}
                    className='input-small'
                    {...domOnlyProps(inventory)}/>
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
  editWidget: PropTypes.func,
  data: PropTypes.object,
  currentWidget: PropTypes.object
};

function mapStateToProps (state) {
  return {
    data: state.form.EditWidget,
    currentWidget: state.widgets.currentWidget
  };
}

export default reduxForm({
  form: 'EditWidget',
  fields: ['name', 'price', 'color', 'melts', 'inventory']
}, mapStateToProps)(EditWidget);
