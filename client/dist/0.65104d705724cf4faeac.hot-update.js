webpackHotUpdate(0,{

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(90);\n\nvar _redux = __webpack_require__(78);\n\nvar _actions = __webpack_require__(301);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar UsersLong = function (_Component) {\n  _inherits(UsersLong, _Component);\n\n  function UsersLong(props) {\n    _classCallCheck(this, UsersLong);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UsersLong).call(this, props));\n\n    _this.handleUserDetails = _this.handleUserDetails.bind(_this);\n    return _this;\n  }\n\n  _createClass(UsersLong, [{\n    key: 'handleUserDetails',\n    value: function () {\n      function handleUserDetails(id) {\n        this.props.getUser(id);\n        browserHistory.push('/user');\n      }\n\n      return handleUserDetails;\n    }()\n  }, {\n    key: 'render',\n    value: function () {\n      function render() {\n        var _this2 = this;\n\n        return _react2['default'].createElement(\n          'div',\n          { className: 'row' },\n          _react2['default'].createElement(\n            'div',\n            { className: 'col-lg-12' },\n            _react2['default'].createElement(\n              'div',\n              { className: 'widget' },\n              _react2['default'].createElement(\n                'div',\n                { className: 'widget-header' },\n                'Users'\n              ),\n              _react2['default'].createElement(\n                'div',\n                { className: 'table-responsive' },\n                _react2['default'].createElement(\n                  'table',\n                  { className: 'table' },\n                  _react2['default'].createElement(\n                    'thead',\n                    null,\n                    _react2['default'].createElement(\n                      'tr',\n                      null,\n                      _react2['default'].createElement(\n                        'th',\n                        { className: 'text-center' },\n                        'ID'\n                      ),\n                      _react2['default'].createElement(\n                        'th',\n                        null,\n                        'Name'\n                      ),\n                      _react2['default'].createElement(\n                        'th',\n                        null,\n                        'Avatar'\n                      )\n                    )\n                  ),\n                  _react2['default'].createElement(\n                    'tbody',\n                    null,\n                    _.map(this.props.users, function (user, key) {\n                      return _react2['default'].createElement(\n                        'tr',\n                        { key: key },\n                        _react2['default'].createElement(\n                          'td',\n                          { className: 'text-center' },\n                          user.id\n                        ),\n                        _react2['default'].createElement(\n                          'td',\n                          { onClick: _this2.handleUserDetails.bind(null, user.id) },\n                          user.name\n                        ),\n                        _react2['default'].createElement(\n                          'td',\n                          null,\n                          _react2['default'].createElement('img', { src: user.gravatar })\n                        )\n                      );\n                    })\n                  )\n                )\n              )\n            )\n          )\n        );\n      }\n\n      return render;\n    }()\n  }]);\n\n  return UsersLong;\n}(_react.Component);\n\nUsersLong.contextTypes = {\n  router: _react.PropTypes.object\n};\n\nfunction mapStateToProps(state) {\n  return {\n    users: state.main.users\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ getUser: _actions.getUser }, dispatch);\n}\n\nUsersLong.propTypes = {};\n\nexports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UsersLong);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9Vc2Vyc0xvbmcuanM/ZjIwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmNsYXNzIFVzZXJzTG9uZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZVVzZXJEZXRhaWxzID0gdGhpcy5oYW5kbGVVc2VyRGV0YWlscy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlVXNlckRldGFpbHMgKGlkKSB7XG4gICAgdGhpcy5wcm9wcy5nZXRVc2VyKGlkKTtcbiAgICBicm93c2VySGlzdG9yeS5wdXNoKCcvdXNlcicpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctMTInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aWRnZXQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dpZGdldC1oZWFkZXInPlxuICAgICAgICAgICAgICBVc2Vyc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFibGUtcmVzcG9uc2l2ZSc+XG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJz5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICBJRFxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgQXZhdGFyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAge18ubWFwKHRoaXMucHJvcHMudXNlcnMsICh1c2VyLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRyIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlci5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBvbkNsaWNrPXt0aGlzLmhhbmRsZVVzZXJEZXRhaWxzLmJpbmQobnVsbCwgdXNlci5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmdyYXZhdGFyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+KTtcbiAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Vc2Vyc0xvbmcuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyAoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB1c2Vyczogc3RhdGUubWFpbi51c2Vyc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMgKGRpc3BhdGNoKSB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoe2dldFVzZXJ9LCBkaXNwYXRjaCk7XG59XG5cblVzZXJzTG9uZy5wcm9wVHlwZXMgPSB7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2Vyc0xvbmcpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY2xpZW50L3NyYy9jb250YWluZXJzL1VzZXJzTG9uZy5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFEQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUEE7QUFXQTtBQWJBO0FBZEE7QUFEQTtBQUpBO0FBREE7QUFEQTtBQTBDQTtBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})