webpackHotUpdate(0,{

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(90);\n\nvar _redux = __webpack_require__(78);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar WigetsView = function (_Component) {\n  _inherits(WigetsView, _Component);\n\n  function WigetsView(props) {\n    _classCallCheck(this, WigetsView);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(WigetsView).call(this, props));\n  }\n\n  _createClass(WigetsView, [{\n    key: 'render',\n    value: function () {\n      function render() {\n        return _react2['default'].createElement(\n          'div',\n          { className: 'row' },\n          _react2['default'].createElement(\n            'div',\n            { className: 'col-lg-12' },\n            _react2['default'].createElement(\n              'div',\n              { className: 'widget' },\n              _react2['default'].createElement(\n                'div',\n                { className: 'widget-header' },\n                'Create/Edit Template'\n              ),\n              _react2['default'].createElement(\n                'div',\n                { className: 'widget-body' },\n                _react2['default'].createElement(\n                  'form',\n                  { className: 'form-horizontal' },\n                  _react2['default'].createElement(\n                    'legend',\n                    null,\n                    'Create Widget'\n                  ),\n                  _react2['default'].createElement(\n                    'div',\n                    { className: 'controls' },\n                    'Name',\n                    _react2['default'].createElement('input', {\n                      id: 'widget-name',\n                      name: 'widget-name',\n                      type: 'text',\n                      placeholder: 'foo-bar',\n                      className: 'input-medium' })\n                  ),\n                  _react2['default'].createElement(\n                    'div',\n                    { className: 'controls' },\n                    _react2['default'].createElement(\n                      'div',\n                      { className: 'input-prepend' },\n                      'Price',\n                      _react2['default'].createElement(\n                        'span',\n                        { className: 'add-on' },\n                        '$'\n                      ),\n                      _react2['default'].createElement('input', {\n                        id: 'widget-price',\n                        name: 'widget-price',\n                        className: 'input-medium',\n                        placeholder: '0.00',\n                        type: 'text' })\n                    )\n                  ),\n                  _react2['default'].createElement(\n                    'div',\n                    { className: 'controls' },\n                    'Color',\n                    _react2['default'].createElement(\n                      'select',\n                      { id: 'widget-color', name: 'widget-color', className: 'input-large' },\n                      _react2['default'].createElement(\n                        'option',\n                        null,\n                        'red'\n                      ),\n                      _react2['default'].createElement(\n                        'option',\n                        null,\n                        'purple'\n                      ),\n                      _react2['default'].createElement(\n                        'option',\n                        null,\n                        'black'\n                      ),\n                      _react2['default'].createElement(\n                        'option',\n                        null,\n                        'green'\n                      ),\n                      _react2['default'].createElement(\n                        'option',\n                        null,\n                        'magenta'\n                      ),\n                      _react2['default'].createElement(\n                        'option',\n                        null,\n                        'white'\n                      ),\n                      _react2['default'].createElement(\n                        'option',\n                        null,\n                        'depends on the viewing angle'\n                      )\n                    )\n                  ),\n                  _react2['default'].createElement(\n                    'div',\n                    { className: 'controls' },\n                    'Melts',\n                    _react2['default'].createElement('input', {\n                      type: 'checkbox',\n                      name: 'widget-properties',\n                      id: 'widget-properties-0',\n                      value: 'melts' })\n                  ),\n                  _react2['default'].createElement(\n                    'div',\n                    { className: 'controls' },\n                    'Inventory',\n                    _react2['default'].createElement('input', {\n                      id: 'widget-count',\n                      name: 'widget-count',\n                      type: 'text',\n                      placeholder: '#?',\n                      className: 'input-small' })\n                  )\n                )\n              )\n            )\n          )\n        );\n      }\n\n      return render;\n    }()\n  }]);\n\n  return WigetsView;\n}(_react.Component);\n\nWigetsView.contextTypes = {\n  router: _react.PropTypes.object\n};\n\nfunction mapStateToProps(state) {\n  return {};\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({}, dispatch);\n}\n\nWigetsView.propTypes = {};\n\nexports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(WigetsView);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjk1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9XaWRnZXRzUGFnZS5qcz9kZmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5cbmNsYXNzIFdpZ2V0c1ZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy0xMic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dpZGdldCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2lkZ2V0LWhlYWRlcic+XG4gICAgICAgICAgICAgIENyZWF0ZS9FZGl0IFRlbXBsYXRlXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aWRnZXQtYm9keSc+XG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZm9ybS1ob3Jpem9udGFsJz5cbiAgICAgICAgICAgICAgICA8bGVnZW5kPlxuICAgICAgICAgICAgICAgICAgQ3JlYXRlIFdpZGdldFxuICAgICAgICAgICAgICAgIDwvbGVnZW5kPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9scyc+XG4gICAgICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9J3dpZGdldC1uYW1lJ1xuICAgICAgICAgICAgICAgICAgICBuYW1lPSd3aWRnZXQtbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2Zvby1iYXInXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5wdXQtbWVkaXVtJyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9scyc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtcHJlcGVuZCc+XG4gICAgICAgICAgICAgICAgICAgIFByaWNlXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYWRkLW9uJz4kPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nd2lkZ2V0LXByaWNlJ1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3dpZGdldC1wcmljZSdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lucHV0LW1lZGl1bSdcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMC4wMCdcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0JyAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2xzJz5cbiAgICAgICAgICAgICAgICAgIENvbG9yXG4gICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPSd3aWRnZXQtY29sb3InIG5hbWU9J3dpZGdldC1jb2xvcicgY2xhc3NOYW1lPSdpbnB1dC1sYXJnZSc+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgcmVkXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIHB1cnBsZVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICBibGFja1xuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICBncmVlblxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICBtYWdlbnRhXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIHdoaXRlXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIGRlcGVuZHMgb24gdGhlIHZpZXdpbmcgYW5nbGVcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbHMnPlxuICAgICAgICAgICAgICAgICAgTWVsdHNcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nd2lkZ2V0LXByb3BlcnRpZXMnXG4gICAgICAgICAgICAgICAgICAgIGlkPSd3aWRnZXQtcHJvcGVydGllcy0wJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nbWVsdHMnIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2xzJz5cbiAgICAgICAgICAgICAgICAgIEludmVudG9yeVxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPSd3aWRnZXQtY291bnQnXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3dpZGdldC1jb3VudCdcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JyM/J1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lucHV0LXNtYWxsJyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbldpZ2V0c1ZpZXcuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyAoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzIChkaXNwYXRjaCkge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHt9LCBkaXNwYXRjaCk7XG59XG5cbldpZ2V0c1ZpZXcucHJvcFR5cGVzID0ge1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoV2lnZXRzVmlldyk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjbGllbnQvc3JjL2NvbnRhaW5lcnMvV2lkZ2V0c1BhZ2UuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBREE7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQkE7QUFGQTtBQTBCQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUEzREE7QUFEQTtBQUpBO0FBREE7QUFEQTtBQWlGQTtBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})