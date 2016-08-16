webpackHotUpdate(0,{

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(90);\n\nvar _redux = __webpack_require__(78);\n\nvar _reactRouter = __webpack_require__(196);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar WidgetsLong = function (_Component) {\n  _inherits(WidgetsLong, _Component);\n\n  function WidgetsLong(props) {\n    _classCallCheck(this, WidgetsLong);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(WidgetsLong).call(this, props));\n  }\n\n  _createClass(WidgetsLong, [{\n    key: 'handleCreate',\n    value: function () {\n      function handleCreate() {\n        this.props.history.push('/create');\n      }\n\n      return handleCreate;\n    }()\n  }, {\n    key: 'render',\n    value: function () {\n      function render() {\n        return _react2['default'].createElement(\n          'div',\n          { className: 'row' },\n          _react2['default'].createElement(\n            'div',\n            { className: 'col-lg-12' },\n            _react2['default'].createElement(\n              'div',\n              { className: 'widget' },\n              _react2['default'].createElement(\n                'div',\n                { className: 'widget-header' },\n                'Widgets',\n                _react2['default'].createElement(\n                  'div',\n                  { className: 'pull-right' },\n                  _react2['default'].createElement(\n                    'button',\n                    { className: 'btn btn-sm btn-info', onClick: handleCreate },\n                    '+ Create'\n                  )\n                )\n              ),\n              _react2['default'].createElement(\n                'div',\n                { className: 'table-responsive' },\n                _react2['default'].createElement(\n                  'table',\n                  { className: 'table' },\n                  _react2['default'].createElement(\n                    'thead',\n                    null,\n                    _react2['default'].createElement(\n                      'tr',\n                      null,\n                      _react2['default'].createElement(\n                        'th',\n                        { className: 'text-center' },\n                        'ID'\n                      ),\n                      _react2['default'].createElement(\n                        'th',\n                        null,\n                        'Name'\n                      ),\n                      _react2['default'].createElement(\n                        'th',\n                        null,\n                        'Color'\n                      ),\n                      _react2['default'].createElement(\n                        'th',\n                        null,\n                        'Price'\n                      ),\n                      _react2['default'].createElement(\n                        'th',\n                        null,\n                        'Melts?'\n                      ),\n                      _react2['default'].createElement(\n                        'th',\n                        null,\n                        'Inventory'\n                      )\n                    )\n                  ),\n                  _react2['default'].createElement(\n                    'tbody',\n                    null,\n                    _.map(this.props.widgets, function (widget, key) {\n                      return _react2['default'].createElement(\n                        'tr',\n                        { key: key },\n                        _react2['default'].createElement(\n                          'td',\n                          null,\n                          widget.id\n                        ),\n                        _react2['default'].createElement(\n                          'td',\n                          null,\n                          widget.name\n                        ),\n                        _react2['default'].createElement(\n                          'td',\n                          { className: 'text-center' },\n                          widget.color\n                        ),\n                        _react2['default'].createElement(\n                          'td',\n                          null,\n                          widget.price\n                        ),\n                        _react2['default'].createElement(\n                          'td',\n                          null,\n                          widget.melts\n                        ),\n                        _react2['default'].createElement(\n                          'td',\n                          null,\n                          widget.inventory\n                        )\n                      );\n                    })\n                  )\n                )\n              )\n            )\n          )\n        );\n      }\n\n      return render;\n    }()\n  }]);\n\n  return WidgetsLong;\n}(_react.Component);\n\nWidgetsLong.contextTypes = {\n  router: _react.PropTypes.object\n};\n\nfunction mapStateToProps(state) {\n  return {\n    widgets: state.main.widgets\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({}, dispatch);\n}\n\nWidgetsLong.propTypes = {};\n\nexports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(WidgetsLong);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjk5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9XaWRnZXRzTG9uZy5qcz81Y2JlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmNsYXNzIFdpZGdldHNMb25nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgaGFuZGxlQ3JlYXRlICgpIHtcbiAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NyZWF0ZScpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctMTInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aWRnZXQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dpZGdldC1oZWFkZXInPlxuICAgICAgICAgICAgICBXaWRnZXRzXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdWxsLXJpZ2h0Jz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1zbSBidG4taW5mbycgb25DbGljaz17aGFuZGxlQ3JlYXRlfT5cbiAgICAgICAgICAgICAgICAgICsgQ3JlYXRlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFibGUtcmVzcG9uc2l2ZSc+XG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJz5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICBJRFxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgQ29sb3JcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgIFByaWNlXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICBNZWx0cz9cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgIEludmVudG9yeVxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgIHtfLm1hcCh0aGlzLnByb3BzLndpZGdldHMsICh3aWRnZXQsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8dHIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aWRnZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2lkZ2V0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2lkZ2V0LmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpZGdldC5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aWRnZXQubWVsdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2lkZ2V0LmludmVudG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPik7XG4gICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuV2lkZ2V0c0xvbmcuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyAoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB3aWRnZXRzOiBzdGF0ZS5tYWluLndpZGdldHNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzIChkaXNwYXRjaCkge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHt9LCBkaXNwYXRjaCk7XG59XG5cbldpZGdldHNMb25nLnByb3BUeXBlcyA9IHtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFdpZGdldHNMb25nKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNsaWVudC9zcmMvY29udGFpbmVycy9XaWRnZXRzTG9uZy5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUZBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaEJBO0FBREE7QUFzQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFoQkE7QUFvQkE7QUF0QkE7QUF2QkE7QUFEQTtBQVRBO0FBREE7QUFEQTtBQWlFQTtBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})