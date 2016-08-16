webpackHotUpdate(0,{

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(90);\n\nvar _redux = __webpack_require__(78);\n\nvar _SideBar = __webpack_require__(293);\n\nvar _SideBar2 = _interopRequireDefault(_SideBar);\n\nvar _Users = __webpack_require__(290);\n\nvar _Users2 = _interopRequireDefault(_Users);\n\nvar _Widgets = __webpack_require__(291);\n\nvar _Widgets2 = _interopRequireDefault(_Widgets);\n\nvar _DashboardBoxes = __webpack_require__(297);\n\nvar _DashboardBoxes2 = _interopRequireDefault(_DashboardBoxes);\n\nvar _actions = __webpack_require__(301);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Dashboard = function (_Component) {\n  _inherits(Dashboard, _Component);\n\n  function Dashboard(props) {\n    _classCallCheck(this, Dashboard);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(Dashboard).call(this, props));\n  }\n\n  _createClass(Dashboard, [{\n    key: 'componentWillMount',\n    value: function () {\n      function componentWillMount() {\n        this.props.getUsers();\n        console.log('YOOOOO', this.props.users);\n      }\n\n      return componentWillMount;\n    }()\n  }, {\n    key: 'render',\n    value: function () {\n      function render() {\n        return _react2['default'].createElement(\n          'div',\n          null,\n          _react2['default'].createElement(_DashboardBoxes2['default'], null),\n          _react2['default'].createElement(\n            'div',\n            { className: 'row' },\n            _react2['default'].createElement(_Users2['default'], { users: this.props.users }),\n            _react2['default'].createElement(_Widgets2['default'], null)\n          )\n        );\n      }\n\n      return render;\n    }()\n  }]);\n\n  return Dashboard;\n}(_react.Component);\n\nDashboard.propTypes = {};\n\nfunction mapStateToProps(state) {\n  return {\n    users: state\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ getUsers: _actions.getUsers }, dispatch);\n}\n\nexports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Dashboard);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9EYXNoYm9hcmQuanM/Yjk2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGVCYXInO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcnMnO1xuaW1wb3J0IFdpZGdldHMgZnJvbSAnLi4vY29tcG9uZW50cy9XaWRnZXRzJztcbmltcG9ydCBEYXNoYm9hcmRCb3hlcyBmcm9tICcuLi9jb21wb25lbnRzL0Rhc2hib2FyZEJveGVzJztcbmltcG9ydCB7IGdldFVzZXJzIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgdGhpcy5wcm9wcy5nZXRVc2VycygpO1xuICAgIGNvbnNvbGUubG9nKCdZT09PT08nLCB0aGlzLnByb3BzLnVzZXJzKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxEYXNoYm9hcmRCb3hlcyAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICA8VXNlcnMgdXNlcnM9e3RoaXMucHJvcHMudXNlcnN9IC8+XG4gICAgICAgICAgPFdpZGdldHMgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkRhc2hib2FyZC5wcm9wVHlwZXMgPSB7XG59O1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMgKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgdXNlcnM6IHN0YXRlXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyAoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7Z2V0VXNlcnN9LCBkaXNwYXRjaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERhc2hib2FyZCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjbGllbnQvc3JjL2NvbnRhaW5lcnMvRGFzaGJvYXJkLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})