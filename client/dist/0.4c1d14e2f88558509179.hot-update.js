webpackHotUpdate(0,{

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(90);\n\nvar _redux = __webpack_require__(78);\n\nvar _SideBar = __webpack_require__(293);\n\nvar _SideBar2 = _interopRequireDefault(_SideBar);\n\nvar _Users = __webpack_require__(290);\n\nvar _Users2 = _interopRequireDefault(_Users);\n\nvar _Widgets = __webpack_require__(291);\n\nvar _Widgets2 = _interopRequireDefault(_Widgets);\n\nvar _DashboardBoxes = __webpack_require__(297);\n\nvar _DashboardBoxes2 = _interopRequireDefault(_DashboardBoxes);\n\nvar _actions = __webpack_require__(301);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Dashboard = function (_Component) {\n  _inherits(Dashboard, _Component);\n\n  function Dashboard(props) {\n    _classCallCheck(this, Dashboard);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(Dashboard).call(this, props));\n  }\n\n  _createClass(Dashboard, [{\n    key: 'componentWillMount',\n    value: function () {\n      function componentWillMount() {\n        this.props.getUsers();\n      }\n\n      return componentWillMount;\n    }()\n  }, {\n    key: 'render',\n    value: function () {\n      function render() {\n        return _react2['default'].createElement(\n          'div',\n          null,\n          _react2['default'].createElement(_DashboardBoxes2['default'], null),\n          _react2['default'].createElement(\n            'div',\n            { className: 'row' },\n            _react2['default'].createElement(_Users2['default'], null),\n            this.props.users,\n            _react2['default'].createElement(_Widgets2['default'], null)\n          )\n        );\n      }\n\n      return render;\n    }()\n  }]);\n\n  return Dashboard;\n}(_react.Component);\n\nDashboard.propTypes = {};\n\nfunction mapStateToProps(state) {\n  return {\n    users: state.users\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ getUsers: _actions.getUsers }, dispatch);\n}\n\nexports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Dashboard);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9EYXNoYm9hcmQuanM/Yjk2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGVCYXInO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcnMnO1xuaW1wb3J0IFdpZGdldHMgZnJvbSAnLi4vY29tcG9uZW50cy9XaWRnZXRzJztcbmltcG9ydCBEYXNoYm9hcmRCb3hlcyBmcm9tICcuLi9jb21wb25lbnRzL0Rhc2hib2FyZEJveGVzJztcbmltcG9ydCB7IGdldFVzZXJzIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgdGhpcy5wcm9wcy5nZXRVc2VycygpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPERhc2hib2FyZEJveGVzIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgIDxVc2VycyAvPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXJzfVxuICAgICAgICAgIDxXaWRnZXRzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5EYXNoYm9hcmQucHJvcFR5cGVzID0ge1xufTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzIChzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHVzZXJzOiBzdGF0ZS51c2Vyc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMgKGRpc3BhdGNoKSB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoe2dldFVzZXJzfSwgZGlzcGF0Y2gpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEYXNoYm9hcmQpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY2xpZW50L3NyYy9jb250YWluZXJzL0Rhc2hib2FyZC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFTQTtBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})