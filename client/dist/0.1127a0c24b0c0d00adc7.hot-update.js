webpackHotUpdate(0,{

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _lodash = __webpack_require__(323);\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _Search = __webpack_require__(298);\n\nvar _Search2 = _interopRequireDefault(_Search);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar Users = function Users(props) {\n  return _react2['default'].createElement(\n    'div',\n    { className: 'col-lg-6' },\n    _react2['default'].createElement(\n      'div',\n      { className: 'widget' },\n      _react2['default'].createElement(\n        'div',\n        { className: 'widget-header' },\n        'Users',\n        _react2['default'].createElement(_Search2['default'], { name: 'Search Users' })\n      ),\n      _react2['default'].createElement(\n        'div',\n        { className: 'table-responsive' },\n        _react2['default'].createElement(\n          'table',\n          { className: 'table' },\n          _react2['default'].createElement(\n            'thead',\n            null,\n            _react2['default'].createElement(\n              'tr',\n              null,\n              _react2['default'].createElement(\n                'th',\n                { className: 'text-center' },\n                'ID'\n              ),\n              _react2['default'].createElement(\n                'th',\n                null,\n                'Name'\n              )\n            )\n          ),\n          _react2['default'].createElement(\n            'tbody',\n            null,\n            _lodash2['default'].map(props.users, function (user) {\n              return _react2['default'].createElement(\n                'tr',\n                null,\n                _react2['default'].createElement(\n                  'td',\n                  { className: 'text-center' },\n                  user.id\n                ),\n                _react2['default'].createElement(\n                  'td',\n                  null,\n                  user.name\n                )\n              );\n            })\n          )\n        )\n      )\n    )\n  );\n};\n\nexports['default'] = Users;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9Vc2Vycy5qcz82ZjczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoJztcblxuY29uc3QgVXNlcnMgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy02Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aWRnZXQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2lkZ2V0LWhlYWRlcic+XG4gICAgICAgICAgVXNlcnNcbiAgICAgICAgICA8U2VhcmNoIG5hbWU9J1NlYXJjaCBVc2VycycgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZS1yZXNwb25zaXZlJz5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICBJRFxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7Xy5tYXAocHJvcHMudXNlcnMsICh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgIHJldHVybiAoPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlci5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+KTtcbiAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjbGllbnQvc3JjL2NvbXBvbmVudHMvVXNlcnMuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBREE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFRQTtBQVZBO0FBWEE7QUFEQTtBQUxBO0FBREE7QUFtQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})