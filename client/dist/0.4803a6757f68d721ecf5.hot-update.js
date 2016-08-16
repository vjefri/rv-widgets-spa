webpackHotUpdate(0,{

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(90);\n\nvar _redux = __webpack_require__(78);\n\nvar _reactRouter = __webpack_require__(196);\n\nvar _SideBar = __webpack_require__(293);\n\nvar _SideBar2 = _interopRequireDefault(_SideBar);\n\nvar _Users = __webpack_require__(290);\n\nvar _Users2 = _interopRequireDefault(_Users);\n\nvar _Widgets = __webpack_require__(291);\n\nvar _Widgets2 = _interopRequireDefault(_Widgets);\n\nvar _DashboardBoxes = __webpack_require__(297);\n\nvar _DashboardBoxes2 = _interopRequireDefault(_DashboardBoxes);\n\nvar _actions = __webpack_require__(301);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Dashboard = function (_Component) {\n  _inherits(Dashboard, _Component);\n\n  function Dashboard(props) {\n    _classCallCheck(this, Dashboard);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dashboard).call(this, props));\n\n    _this.handleUserDetails = _this.handleUserDetails.bind(_this);\n    _this.handleWidgetDetails = _this.handleWidgetDetails.bind(_this);\n    return _this;\n  }\n\n  _createClass(Dashboard, [{\n    key: 'componentDidMount',\n    value: function () {\n      function componentDidMount() {\n        this.props.getUsers();\n        this.props.getWidgets();\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: 'handleUserDetails',\n    value: function () {\n      function handleUserDetails(id) {\n        this.props.getUser(id);\n        _reactRouter.browserHistory.push('/user');\n      }\n\n      return handleUserDetails;\n    }()\n  }, {\n    key: 'handleWidgetDetails',\n    value: function () {\n      function handleWidgetDetails(id) {\n        this.props.getWidget(id);\n        _reactRouter.browserHistory.push('/widget');\n      }\n\n      return handleWidgetDetails;\n    }()\n  }, {\n    key: 'render',\n    value: function () {\n      function render() {\n        var _props = this.props;\n        var users = _props.users;\n        var widgets = _props.widgets;\n        var usersLength = _props.usersLength;\n        var widgetsLength = _props.widgetsLength;\n\n        return _react2['default'].createElement(\n          'div',\n          null,\n          _react2['default'].createElement(_DashboardBoxes2['default'], { usersLength: usersLength, widgetsLength: widgetsLength }),\n          _react2['default'].createElement(\n            'div',\n            { className: 'row' },\n            users ? _react2['default'].createElement(_Users2['default'], { users: users, handleUserDetails: this.handleUserDetails }) : console.log('loading...'),\n            widgets ? _react2['default'].createElement(_Widgets2['default'], { widgets: widgets.slice(0, 10), handleWidgetDetails: this.handleWidgetDetails }) : console.log('loading...')\n          )\n        );\n      }\n\n      return render;\n    }()\n  }]);\n\n  return Dashboard;\n}(_react.Component);\n\nDashboard.contextTypes = {\n  router: _react.PropTypes.object\n};\n\nDashboard.propTypes = {\n  users: _react.PropTypes.arrayOf(_react2['default'].PropTypes.object),\n  widgets: _react.PropTypes.arrayOf(_react2['default'].PropTypes.object)\n};\n\nfunction mapStateToProps(state) {\n  return {\n    users: state.main.users,\n    usersLength: state.main.usersLength,\n    widgets: state.main.widgets,\n    widgetsLength: state.main.widgetsLength\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ getUsers: _actions.getUsers, getWidgets: _actions.getWidgets, getUser: _actions.getUser }, dispatch);\n}\n\nexports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Dashboard);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9EYXNoYm9hcmQuanM/Yjk2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGVCYXInO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcnMnO1xuaW1wb3J0IFdpZGdldHMgZnJvbSAnLi4vY29tcG9uZW50cy9XaWRnZXRzJztcbmltcG9ydCBEYXNoYm9hcmRCb3hlcyBmcm9tICcuLi9jb21wb25lbnRzL0Rhc2hib2FyZEJveGVzJztcbmltcG9ydCB7IGdldFVzZXJzLCBnZXRXaWRnZXRzLCBnZXRVc2VyLCBnZXRXaWRnZXQgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlVXNlckRldGFpbHMgPSB0aGlzLmhhbmRsZVVzZXJEZXRhaWxzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVXaWRnZXREZXRhaWxzID0gdGhpcy5oYW5kbGVXaWRnZXREZXRhaWxzLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5wcm9wcy5nZXRVc2VycygpO1xuICAgIHRoaXMucHJvcHMuZ2V0V2lkZ2V0cygpO1xuICB9XG5cbiAgaGFuZGxlVXNlckRldGFpbHMgKGlkKSB7XG4gICAgdGhpcy5wcm9wcy5nZXRVc2VyKGlkKTtcbiAgICBicm93c2VySGlzdG9yeS5wdXNoKCcvdXNlcicpO1xuICB9XG5cbiAgaGFuZGxlV2lkZ2V0RGV0YWlscyAoaWQpIHtcbiAgICB0aGlzLnByb3BzLmdldFdpZGdldChpZCk7XG4gICAgYnJvd3Nlckhpc3RvcnkucHVzaCgnL3dpZGdldCcpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHVzZXJzLCB3aWRnZXRzLCB1c2Vyc0xlbmd0aCwgd2lkZ2V0c0xlbmd0aCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPERhc2hib2FyZEJveGVzIHVzZXJzTGVuZ3RoPXt1c2Vyc0xlbmd0aH0gd2lkZ2V0c0xlbmd0aD17d2lkZ2V0c0xlbmd0aH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAge3VzZXJzID8gPFVzZXJzIHVzZXJzPXt1c2Vyc30gaGFuZGxlVXNlckRldGFpbHM9e3RoaXMuaGFuZGxlVXNlckRldGFpbHN9IC8+IDogY29uc29sZS5sb2coJ2xvYWRpbmcuLi4nKX1cbiAgICAgICAgICB7d2lkZ2V0cyA/IDxXaWRnZXRzIHdpZGdldHM9e3dpZGdldHMuc2xpY2UoMCwgMTApfSBoYW5kbGVXaWRnZXREZXRhaWxzPXt0aGlzLmhhbmRsZVdpZGdldERldGFpbHN9IC8+IDogY29uc29sZS5sb2coJ2xvYWRpbmcuLi4nKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkRhc2hib2FyZC5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuRGFzaGJvYXJkLnByb3BUeXBlcyA9IHtcbiAgdXNlcnM6IFByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5vYmplY3QpLFxuICB3aWRnZXRzOiBQcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMub2JqZWN0KVxufTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzIChzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHVzZXJzOiBzdGF0ZS5tYWluLnVzZXJzLFxuICAgIHVzZXJzTGVuZ3RoOiBzdGF0ZS5tYWluLnVzZXJzTGVuZ3RoLFxuICAgIHdpZGdldHM6IHN0YXRlLm1haW4ud2lkZ2V0cyxcbiAgICB3aWRnZXRzTGVuZ3RoOiBzdGF0ZS5tYWluLndpZGdldHNMZW5ndGhcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzIChkaXNwYXRjaCkge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHtnZXRVc2VycywgZ2V0V2lkZ2V0cywgZ2V0VXNlcn0sIGRpc3BhdGNoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRGFzaGJvYXJkKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNsaWVudC9zcmMvY29udGFpbmVycy9EYXNoYm9hcmQuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})