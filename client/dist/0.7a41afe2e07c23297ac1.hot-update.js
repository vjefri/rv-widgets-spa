webpackHotUpdate(0,{

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Search = __webpack_require__(298);\n\nvar _Search2 = _interopRequireDefault(_Search);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar Widgets = function Widgets(props) {\n\n  return _react2['default'].createElement(\n    'div',\n    { className: 'col-lg-6' },\n    _react2['default'].createElement(\n      'div',\n      { className: 'widget' },\n      _react2['default'].createElement(\n        'div',\n        { className: 'widget-header' },\n        'Widgets',\n        _react2['default'].createElement(_Search2['default'], { name: 'Search Widgets' })\n      ),\n      _react2['default'].createElement(\n        'div',\n        { className: 'table-responsive' },\n        _react2['default'].createElement(\n          'table',\n          { className: 'table' },\n          _react2['default'].createElement(\n            'thead',\n            null,\n            _react2['default'].createElement(\n              'tr',\n              null,\n              _react2['default'].createElement(\n                'th',\n                { className: 'text-center' },\n                'ID'\n              ),\n              _react2['default'].createElement(\n                'th',\n                null,\n                'Name'\n              )\n            )\n          ),\n          _react2['default'].createElement(\n            'tbody',\n            null,\n            _.map(props.widgets, function (widget, index) {\n              return _react2['default'].createElement(\n                'tr',\n                { key: index },\n                _react2['default'].createElement(\n                  'td',\n                  { className: 'text-center' },\n                  widget.id\n                ),\n                _react2['default'].createElement(\n                  'td',\n                  null,\n                  widget.name\n                )\n              );\n            })\n          )\n        )\n      )\n    )\n  );\n};\n\nexports['default'] = Widgets;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9XaWRnZXRzLmpzPzk2YTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xuXG5jb25zdCBXaWRnZXRzID0gcHJvcHMgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy02Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aWRnZXQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2lkZ2V0LWhlYWRlcic+XG4gICAgICAgICAgV2lkZ2V0c1xuICAgICAgICAgIDxTZWFyY2ggbmFtZT0nU2VhcmNoIFdpZGdldHMnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFibGUtcmVzcG9uc2l2ZSc+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgSURcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge18ubWFwKHByb3BzLndpZGdldHMsICh3aWRnZXQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgIHJldHVybiAoPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2lkZ2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpZGdldC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPik7XG4gICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdpZGdldHM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjbGllbnQvc3JjL2NvbXBvbmVudHMvV2lkZ2V0cy5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQURBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBUUE7QUFWQTtBQVhBO0FBREE7QUFMQTtBQURBO0FBbUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})