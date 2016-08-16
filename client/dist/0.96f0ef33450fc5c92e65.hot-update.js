webpackHotUpdate(0,{

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(90);\n\nvar _redux = __webpack_require__(78);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar UsersLong = function (_Component) {\n  _inherits(UsersLong, _Component);\n\n  function UsersLong(props) {\n    _classCallCheck(this, UsersLong);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(UsersLong).call(this, props));\n  }\n\n  _createClass(UsersLong, [{\n    key: 'render',\n    value: function () {\n      function render() {\n        return _react2['default'].createElement(\n          'div',\n          { className: 'row' },\n          _react2['default'].createElement(\n            'div',\n            { className: 'col-lg-12' },\n            _react2['default'].createElement(\n              'div',\n              { className: 'widget' },\n              _react2['default'].createElement(\n                'div',\n                { className: 'widget-header' },\n                'Users'\n              ),\n              _react2['default'].createElement(\n                'div',\n                { className: 'table-responsive' },\n                _react2['default'].createElement(\n                  'table',\n                  { className: 'table' },\n                  _react2['default'].createElement(\n                    'thead',\n                    null,\n                    _react2['default'].createElement(\n                      'tr',\n                      null,\n                      _react2['default'].createElement(\n                        'th',\n                        { className: 'text-center' },\n                        'ID'\n                      ),\n                      _react2['default'].createElement(\n                        'th',\n                        null,\n                        'Name'\n                      ),\n                      _react2['default'].createElement(\n                        'th',\n                        null,\n                        'Avatar'\n                      )\n                    )\n                  ),\n                  _react2['default'].createElement(\n                    'tbody',\n                    null,\n                    _.map(this.props.users, function (user, key) {\n                      return _react2['default'].createElement(\n                        'tr',\n                        { key: key },\n                        _react2['default'].createElement(\n                          'td',\n                          { className: 'text-center' },\n                          user.id\n                        ),\n                        _react2['default'].createElement(\n                          'td',\n                          null,\n                          user.name\n                        ),\n                        _react2['default'].createElement(\n                          'td',\n                          null,\n                          _react2['default'].createElement('img', { src: user.gravatar })\n                        )\n                      );\n                    })\n                  )\n                )\n              )\n            )\n          )\n        );\n      }\n\n      return render;\n    }()\n  }]);\n\n  return UsersLong;\n}(_react.Component);\n\nUsersLong.contextTypes = {\n  router: _react.PropTypes.object\n};\n\nfunction mapStateToProps(state) {\n  return {\n    users: state.main.users,\n    widgets: state.main.widgets\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({}, dispatch);\n}\n\nUsersLong.propTypes = {};\n\nexports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UsersLong);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9Vc2Vyc0xvbmcuanM/ZjIwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuXG5jbGFzcyBVc2Vyc0xvbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy0xMic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dpZGdldCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2lkZ2V0LWhlYWRlcic+XG4gICAgICAgICAgICAgIFVzZXJzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZS1yZXNwb25zaXZlJz5cbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgIElEXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICBBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICB7Xy5tYXAodGhpcy5wcm9wcy51c2VycywgKHVzZXIsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8dHIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmdyYXZhdGFyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+KTtcbiAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Vc2Vyc0xvbmcuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyAoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB1c2Vyczogc3RhdGUubWFpbi51c2VycyxcbiAgICB3aWRnZXRzOiBzdGF0ZS5tYWluLndpZGdldHNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzIChkaXNwYXRjaCkge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHt9LCBkaXNwYXRjaCk7XG59XG5cblVzZXJzTG9uZy5wcm9wVHlwZXMgPSB7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2Vyc0xvbmcpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY2xpZW50L3NyYy9jb250YWluZXJzL1VzZXJzTG9uZy5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVBBO0FBV0E7QUFiQTtBQWRBO0FBREE7QUFKQTtBQURBO0FBREE7QUEwQ0E7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})