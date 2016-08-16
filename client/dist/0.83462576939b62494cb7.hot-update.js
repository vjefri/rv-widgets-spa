webpackHotUpdate(0,{

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(133);\n\nvar ACTIONS = _interopRequireWildcard(_constants);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }\n\nvar INITIAL_STATE = {};\n\nexports['default'] = function () {\n  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case ACTIONS.GET_USERS_REQUEST:\n      return _extends({}, state, {\n        isFetching: true\n      });\n    case ACTIONS.GET_USERS_SUCCESS:\n      return _extends({}, state, {\n        users: action.users,\n        isFetching: false\n      });\n    case ACTIONS.GET_USERS_FAILURE:\n      return _extends({}, state, {\n        isFetching: false\n      });\n    case ACTIONS.GET_WIDGET_REQUEST:\n      return _extends({}, state, {\n        isFetching: false\n      });\n    case ACTIONS.GET_WIDGET_SUCCESS:\n      return _extends({}, state, {\n        widgets: action.widgets,\n        isFetching: false\n      });\n    case ACTIONS.GET_WIDGET_FAILURE:\n      return _extends({}, state, {\n        isFetching: false\n      });\n    default:\n      return state;\n  }\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvcmVkdWNlcnMvbWFpbi5qcz83MzE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFDVElPTlMgZnJvbSAnLi4vY29uc3RhbnRzLyc7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFDVElPTlMuR0VUX1VTRVJTX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfTtcbiAgICBjYXNlIEFDVElPTlMuR0VUX1VTRVJTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcnM6IGFjdGlvbi51c2VycyxcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIGNhc2UgQUNUSU9OUy5HRVRfVVNFUlNfRkFJTFVSRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgIH07XG4gICAgY2FzZSBBQ1RJT05TLkdFVF9XSURHRVRfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgIH07XG4gICAgY2FzZSBBQ1RJT05TLkdFVF9XSURHRVRfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB3aWRnZXRzOiBhY3Rpb24ud2lkZ2V0cyxcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIGNhc2UgQUNUSU9OUy5HRVRfV0lER0VUX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjbGllbnQvc3JjL3JlZHVjZXJzL21haW4uanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFsQ0E7QUFvQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})