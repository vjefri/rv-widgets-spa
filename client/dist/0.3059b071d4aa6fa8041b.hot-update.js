webpackHotUpdate(0,{

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Search = __webpack_require__(298);\n\nvar _Search2 = _interopRequireDefault(_Search);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar Widgets = function Widgets(props) {\n  return _react2['default'].createElement(\n    'div',\n    { className: 'col-lg-6' },\n    _react2['default'].createElement(\n      'div',\n      { className: 'widget' },\n      _react2['default'].createElement(\n        'div',\n        { className: 'widget-header' },\n        'Widgets',\n        _react2['default'].createElement(_Search2['default'], { name: 'Search Widgets' })\n      ),\n      _react2['default'].createElement(\n        'div',\n        { className: 'table-responsive' },\n        _react2['default'].createElement(\n          'table',\n          { className: 'table' },\n          _react2['default'].createElement(\n            'thead',\n            null,\n            _react2['default'].createElement(\n              'tr',\n              null,\n              _react2['default'].createElement(\n                'th',\n                { className: 'text-center' },\n                'ID'\n              ),\n              _react2['default'].createElement(\n                'th',\n                null,\n                'Name'\n              )\n            )\n          ),\n          _react2['default'].createElement(\n            'tbody',\n            null,\n            _.map(props.widgets, function (widget, index) {\n              return _react2['default'].createElement(\n                'tr',\n                { key: index },\n                _react2['default'].createElement(\n                  'td',\n                  { className: 'text-center' },\n                  widget.id\n                ),\n                _react2['default'].createElement(\n                  'td',\n                  null,\n                  widget.name\n                )\n              );\n            })\n          )\n        )\n      )\n    )\n  );\n};\n\nexports['default'] = Widgets;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9XaWRnZXRzLmpzPzk2YTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xuXG5jb25zdCBXaWRnZXRzID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctNic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd2lkZ2V0Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dpZGdldC1oZWFkZXInPlxuICAgICAgICAgIFdpZGdldHNcbiAgICAgICAgICA8U2VhcmNoIG5hbWU9J1NlYXJjaCBXaWRnZXRzJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RhYmxlLXJlc3BvbnNpdmUnPlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJz5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgIElEXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtfLm1hcChwcm9wcy53aWRnZXRzLCAod2lkZ2V0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICByZXR1cm4gKDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpZGdldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aWRnZXQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4pO1xuICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY2xpZW50L3NyYy9jb21wb25lbnRzL1dpZGdldHMuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBREE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFRQTtBQVZBO0FBWEE7QUFEQTtBQUxBO0FBREE7QUFtQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})