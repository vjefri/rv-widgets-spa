webpackHotUpdate(0,{

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(90);\n\nvar _redux = __webpack_require__(78);\n\nvar _SideBar = __webpack_require__(293);\n\nvar _SideBar2 = _interopRequireDefault(_SideBar);\n\nvar _Users = __webpack_require__(290);\n\nvar _Users2 = _interopRequireDefault(_Users);\n\nvar _Widgets = __webpack_require__(291);\n\nvar _Widgets2 = _interopRequireDefault(_Widgets);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Dashboard = function (_Component) {\n  _inherits(Dashboard, _Component);\n\n  function Dashboard(props) {\n    _classCallCheck(this, Dashboard);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(Dashboard).call(this, props));\n  }\n\n  _createClass(Dashboard, [{\n    key: 'render',\n    value: function () {\n      function render() {\n        return _react2['default'].createElement(\n          'div',\n          { id: 'page-wrapper', className: 'open' },\n          _react2['default'].createElement(\n            'div',\n            { className: 'row' },\n            _react2['default'].createElement(_Users2['default'], null),\n            _react2['default'].createElement(_Widgets2['default'], null)\n          )\n        );\n      }\n\n      return render;\n    }()\n  }]);\n\n  return Dashboard;\n}(_react.Component);\n\nDashboard.contextTypes = {\n  router: _react.PropTypes.object\n};\n\nfunction mapStateToProps(state) {\n  return {};\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({}, dispatch);\n}\n\nDashboard.propTypes = {};\n\nexports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Dashboard);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9EYXNoYm9hcmQuanM/Yjk2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGVCYXInO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcnMnO1xuaW1wb3J0IFdpZGdldHMgZnJvbSAnLi4vY29tcG9uZW50cy9XaWRnZXRzJztcblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD0ncGFnZS13cmFwcGVyJyBjbGFzc05hbWU9J29wZW4nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICA8VXNlcnMgLz5cbiAgICAgICAgICA8V2lkZ2V0cyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRGFzaGJvYXJkLmNvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMgKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyAoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7fSwgZGlzcGF0Y2gpO1xufVxuXG5EYXNoYm9hcmQucHJvcFR5cGVzID0ge1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRGFzaGJvYXJkKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNsaWVudC9zcmMvY29udGFpbmVycy9EYXNoYm9hcmQuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar Widgets = function Widgets(props) {\n  return _react2['default'].createElement(\n    'div',\n    { 'class': 'col-lg-6' },\n    _react2['default'].createElement(\n      'div',\n      { 'class': 'widget' },\n      _react2['default'].createElement(\n        'div',\n        { 'class': 'widget-header' },\n        'Widgets',\n        _react2['default'].createElement(\n          'div',\n          { 'class': 'pull-right' },\n          _react2['default'].createElement('input', { type: 'text', 'class': 'form-control input-sm' })\n        )\n      ),\n      _react2['default'].createElement(\n        'div',\n        { 'class': 'table-responsive' },\n        _react2['default'].createElement(\n          'table',\n          { 'class': 'table' },\n          _react2['default'].createElement(\n            'thead',\n            null,\n            _react2['default'].createElement(\n              'tr',\n              null,\n              _react2['default'].createElement(\n                'th',\n                { 'class': 'text-center' },\n                'ID'\n              ),\n              _react2['default'].createElement(\n                'th',\n                null,\n                'Name'\n              )\n            )\n          ),\n          _react2['default'].createElement(\n            'tbody',\n            null,\n            _react2['default'].createElement(\n              'tr',\n              null,\n              _react2['default'].createElement(\n                'td',\n                { 'class': 'text-center' },\n                '1'\n              ),\n              _react2['default'].createElement(\n                'td',\n                null,\n                'A'\n              )\n            ),\n            _react2['default'].createElement(\n              'tr',\n              null,\n              _react2['default'].createElement(\n                'td',\n                { 'class': 'text-center' },\n                '2'\n              ),\n              _react2['default'].createElement(\n                'td',\n                null,\n                'B'\n              )\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports['default'] = Widgets;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9XaWRnZXRzLmpzPzk2YTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgV2lkZ2V0cyA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPSdjb2wtbGctNic+XG4gICAgICA8ZGl2IGNsYXNzPSd3aWRnZXQnPlxuICAgICAgICA8ZGl2IGNsYXNzPSd3aWRnZXQtaGVhZGVyJz5cbiAgICAgICAgICBXaWRnZXRzXG4gICAgICAgICAgPGRpdiBjbGFzcz0ncHVsbC1yaWdodCc+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3M9J2Zvcm0tY29udHJvbCBpbnB1dC1zbScgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J3RhYmxlLXJlc3BvbnNpdmUnPlxuICAgICAgICAgIDx0YWJsZSBjbGFzcz0ndGFibGUnPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSd0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICBJRFxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPSd0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICBBXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgQlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY2xpZW50L3NyYy9jb21wb25lbnRzL1dpZGdldHMuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFEQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBVEE7QUFYQTtBQURBO0FBUEE7QUFEQTtBQTJDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})