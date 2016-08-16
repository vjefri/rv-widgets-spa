webpackHotUpdate(0,{

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getUsers = getUsers;\nexports.getWidgets = getWidgets;\n\nvar _isomorphicFetch = __webpack_require__(302);\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _constants = __webpack_require__(133);\n\nvar ACTIONS = _interopRequireWildcard(_constants);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar url = 'http://spa.tglrw.com:4000';\n\n// Get User Data\n\nfunction UserRequest() {\n  return {\n    type: ACTIONS.GET_USERS_REQUEST\n  };\n}\n\nfunction UserSuccess(users) {\n  var usersLength = users.length();\n\n  return {\n    type: ACTIONS.GET_USERS_SUCCESS,\n    users: users,\n    usersLength: usersLength,\n    error: null\n  };\n}\n\nfunction UserFailure(err) {\n  return {\n    type: ACTIONS.GET_USERS_FAILURE,\n    error: err\n  };\n}\n\nfunction getUsers() {\n  return function (dispatch) {\n    dispatch(UserRequest());\n    return (0, _isomorphicFetch2['default'])(url + '/users', { method: 'GET' }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return dispatch(UserSuccess(data));\n    })['catch'](function (err) {\n      return dispatch(UserFailure(err));\n    });\n  };\n};\n\n// Get Widget Data\n\nfunction WidgetRequest() {\n  return {\n    type: ACTIONS.GET_WIDGETS_REQUEST\n  };\n}\n\nfunction WidgetSuccess(widgets) {\n  return {\n    type: ACTIONS.GET_WIDGETS_SUCCESS,\n    widgets: widgets,\n    error: null\n  };\n}\n\nfunction WidgetFailure(err) {\n  return {\n    type: ACTIONS.GET_WIDGETS_FAILURE,\n    error: err\n  };\n}\n\nfunction getWidgets() {\n  return function (dispatch) {\n    dispatch(WidgetRequest());\n    return (0, _isomorphicFetch2['default'])(url + '/widgets', { method: 'GET' }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return dispatch(WidgetSuccess(data));\n    })['catch'](function (err) {\n      return dispatch(WidgetFailure(err));\n    });\n  };\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvYWN0aW9ucy9pbmRleC5qcz9jNGY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcblxuaW1wb3J0ICogYXMgQUNUSU9OUyBmcm9tICcuLi9jb25zdGFudHMvJztcblxuY29uc3QgdXJsID0gJ2h0dHA6Ly9zcGEudGdscncuY29tOjQwMDAnO1xuXG4vLyBHZXQgVXNlciBEYXRhXG5cbmZ1bmN0aW9uIFVzZXJSZXF1ZXN0ICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05TLkdFVF9VU0VSU19SRVFVRVNUXG4gIH07XG59XG5cbmZ1bmN0aW9uIFVzZXJTdWNjZXNzICh1c2Vycykge1xuICBjb25zdCB1c2Vyc0xlbmd0aCA9IHVzZXJzLmxlbmd0aCgpO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OUy5HRVRfVVNFUlNfU1VDQ0VTUyxcbiAgICB1c2VyczogdXNlcnMsXG4gICAgdXNlcnNMZW5ndGg6IHVzZXJzTGVuZ3RoLFxuICAgIGVycm9yOiBudWxsXG4gIH07XG59XG5cbmZ1bmN0aW9uIFVzZXJGYWlsdXJlIChlcnIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05TLkdFVF9VU0VSU19GQUlMVVJFLFxuICAgIGVycm9yOiBlcnJcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJzICgpIHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaChVc2VyUmVxdWVzdCgpKTtcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfS91c2Vyc2AsIHttZXRob2Q6ICdHRVQnfSlcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaChVc2VyU3VjY2VzcyhkYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBkaXNwYXRjaChVc2VyRmFpbHVyZShlcnIpKSk7XG4gIH07XG59O1xuXG4vLyBHZXQgV2lkZ2V0IERhdGFcblxuZnVuY3Rpb24gV2lkZ2V0UmVxdWVzdCAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OUy5HRVRfV0lER0VUU19SRVFVRVNUXG4gIH07XG59XG5cbmZ1bmN0aW9uIFdpZGdldFN1Y2Nlc3MgKHdpZGdldHMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05TLkdFVF9XSURHRVRTX1NVQ0NFU1MsXG4gICAgd2lkZ2V0czogd2lkZ2V0cyxcbiAgICBlcnJvcjogbnVsbFxuICB9O1xufVxuXG5mdW5jdGlvbiBXaWRnZXRGYWlsdXJlIChlcnIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05TLkdFVF9XSURHRVRTX0ZBSUxVUkUsXG4gICAgZXJyb3I6IGVyclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2lkZ2V0cyAoKSB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2goV2lkZ2V0UmVxdWVzdCgpKTtcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfS93aWRnZXRzYCwge21ldGhvZDogJ0dFVCd9KVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKFdpZGdldFN1Y2Nlc3MoZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gZGlzcGF0Y2goV2lkZ2V0RmFpbHVyZShlcnIpKSk7XG4gIH07XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY2xpZW50L3NyYy9hY3Rpb25zL2luZGV4LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7OztBQWdDQTtBQW1DQTtBQUNBO0FBcEVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})