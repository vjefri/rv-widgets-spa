webpackHotUpdate(0,{

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Search = __webpack_require__(298);\n\nvar _Search2 = _interopRequireDefault(_Search);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar Widgets = function Widgets(props) {\n  var widgets = props.widgets.slice(10);\n  console.log(widgets);\n  return _react2['default'].createElement(\n    'div',\n    { className: 'col-lg-6' },\n    _react2['default'].createElement(\n      'div',\n      { className: 'widget' },\n      _react2['default'].createElement(\n        'div',\n        { className: 'widget-header' },\n        'Widgets',\n        _react2['default'].createElement(_Search2['default'], { name: 'Search Widgets' })\n      ),\n      _react2['default'].createElement(\n        'div',\n        { className: 'table-responsive' },\n        _react2['default'].createElement(\n          'table',\n          { className: 'table' },\n          _react2['default'].createElement(\n            'thead',\n            null,\n            _react2['default'].createElement(\n              'tr',\n              null,\n              _react2['default'].createElement(\n                'th',\n                { className: 'text-center' },\n                'ID'\n              ),\n              _react2['default'].createElement(\n                'th',\n                null,\n                'Name'\n              )\n            )\n          ),\n          _react2['default'].createElement(\n            'tbody',\n            null,\n            _.map(props.widgets, function (widget, index) {\n              return _react2['default'].createElement(\n                'tr',\n                { key: index },\n                _react2['default'].createElement(\n                  'td',\n                  { className: 'text-center' },\n                  widget.id\n                ),\n                _react2['default'].createElement(\n                  'td',\n                  null,\n                  widget.name\n                )\n              );\n            })\n          )\n        )\n      )\n    )\n  );\n};\n\nexports['default'] = Widgets;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9XaWRnZXRzLmpzPzk2YTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xuXG5jb25zdCBXaWRnZXRzID0gcHJvcHMgPT4ge1xuICBsZXQgd2lkZ2V0cyA9IHByb3BzLndpZGdldHMuc2xpY2UoMTApO1xuICBjb25zb2xlLmxvZyh3aWRnZXRzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTYnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3dpZGdldCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aWRnZXQtaGVhZGVyJz5cbiAgICAgICAgICBXaWRnZXRzXG4gICAgICAgICAgPFNlYXJjaCBuYW1lPSdTZWFyY2ggV2lkZ2V0cycgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZS1yZXNwb25zaXZlJz5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICBJRFxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7Xy5tYXAocHJvcHMud2lkZ2V0cywgKHdpZGdldCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgcmV0dXJuICg8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aWRnZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2lkZ2V0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+KTtcbiAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0cztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNsaWVudC9zcmMvY29tcG9uZW50cy9XaWRnZXRzLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFEQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVFBO0FBVkE7QUFYQTtBQURBO0FBTEE7QUFEQTtBQW1DQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})