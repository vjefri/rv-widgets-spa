webpackHotUpdate(0,{

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getUsers = getUsers;\n\nvar _isomorphicFetch = __webpack_require__(302);\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _constants = __webpack_require__(133);\n\nvar ACTIONS = _interopRequireWildcard(_constants);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar url = 'http://spa.tglrw.com:4000';\n\nfunction UserRequest() {\n  return {\n    type: ACTIONS.GET_USERS_REQUEST\n  };\n}\n\nfunction UserSuccess(users) {\n  return {\n    type: ACTIONS.GET_USERS_SUCCESS,\n    users: users,\n    error: null\n  };\n}\n\nfunction UserFailure(err) {\n  return {\n    type: ACTIONS.GET_USERS_FAILURE,\n    error: err\n  };\n}\n\nfunction getUsers() {\n  return function (dispatch) {\n    dispatch(UserRequest());\n    return (0, _isomorphicFetch2['default'])(url + '/users', { method: 'GET' }).then(function (res) {\n      return console.log(res);\n    }).then(function (json) {\n      console.log(json);\n      return dispatch(UserSuccess(json));\n    })['catch'](function (err) {\n      return dispatch(UserFailure(err));\n    });\n  };\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvYWN0aW9ucy9pbmRleC5qcz9jNGY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcblxuaW1wb3J0ICogYXMgQUNUSU9OUyBmcm9tICcuLi9jb25zdGFudHMvJztcblxuY29uc3QgdXJsID0gJ2h0dHA6Ly9zcGEudGdscncuY29tOjQwMDAnO1xuXG5mdW5jdGlvbiBVc2VyUmVxdWVzdCAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OUy5HRVRfVVNFUlNfUkVRVUVTVFxuICB9O1xufVxuXG5mdW5jdGlvbiBVc2VyU3VjY2VzcyAodXNlcnMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05TLkdFVF9VU0VSU19TVUNDRVNTLFxuICAgIHVzZXJzOiB1c2VycyxcbiAgICBlcnJvcjogbnVsbFxuICB9O1xufVxuXG5mdW5jdGlvbiBVc2VyRmFpbHVyZSAoZXJyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OUy5HRVRfVVNFUlNfRkFJTFVSRSxcbiAgICBlcnJvcjogZXJyXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VycyAoKSB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2goVXNlclJlcXVlc3QoKSk7XG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0vdXNlcnNgLCB7bWV0aG9kOiAnR0VUJ30pXG4gICAgICAudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKFVzZXJTdWNjZXNzKGpzb24pKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGRpc3BhdGNoKFVzZXJGYWlsdXJlKGVycikpKTtcbiAgfTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjbGllbnQvc3JjL2FjdGlvbnMvaW5kZXguanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7O0FBMkJBO0FBQ0E7QUE1QkE7QUFDQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})