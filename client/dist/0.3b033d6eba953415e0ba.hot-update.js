webpackHotUpdate(0,{

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(133);\n\nvar ACTIONS = _interopRequireWildcard(_constants);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }\n\nvar INITIAL_STATE = {};\n\nexports['default'] = function () {\n  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];\n  var action = arguments[1];\n\n  console.log(action.users);\n  switch (action.type) {\n    case ACTIONS.GET_USERS_REQUEST:\n      return _extends({}, state, {\n        isFetching: true\n      });\n    case ACTIONS.GET_USERS_SUCCESS:\n      return _extends({}, state, {\n        users: action.users,\n        isFetching: false\n      });\n    case ACTIONS.GET_USERS_FAILURE:\n      return _extends({}, state, {\n        isFetching: false\n      });\n    default:\n      return state;\n  }\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvcmVkdWNlcnMvbWFpbi5qcz83MzE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFDVElPTlMgZnJvbSAnLi4vY29uc3RhbnRzLyc7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XG4gIGNvbnNvbGUubG9nKGFjdGlvbi51c2VycylcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUNUSU9OUy5HRVRfVVNFUlNfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9O1xuICAgIGNhc2UgQUNUSU9OUy5HRVRfVVNFUlNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyczogYWN0aW9uLnVzZXJzLFxuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgIH07XG4gICAgY2FzZSBBQ1RJT05TLkdFVF9VU0VSU19GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNsaWVudC9zcmMvcmVkdWNlcnMvbWFpbi5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBREE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQWxCQTtBQW9CQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})