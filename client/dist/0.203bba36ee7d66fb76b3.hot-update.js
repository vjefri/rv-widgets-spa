webpackHotUpdate(0,{

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getUsers = getUsers;\nexports.getUser = getUser;\nexports.getWidgets = getWidgets;\nexports.getWidget = getWidget;\nexports.createWidget = createWidget;\n\nvar _isomorphicFetch = __webpack_require__(302);\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _constants = __webpack_require__(133);\n\nvar ACTIONS = _interopRequireWildcard(_constants);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar url = 'http://spa.tglrw.com:4000';\n\n// Get All User Data\n\nfunction UserRequest() {\n  return {\n    type: ACTIONS.GET_USERS_REQUEST\n  };\n}\n\nfunction UserSuccess(users) {\n  var usersLength = users.length;\n\n  return {\n    type: ACTIONS.GET_USERS_SUCCESS,\n    users: users,\n    usersLength: usersLength,\n    error: null\n  };\n}\n\nfunction UserFailure(err) {\n  return {\n    type: ACTIONS.GET_USERS_FAILURE,\n    error: err\n  };\n}\n\nfunction getUsers() {\n  return function (dispatch) {\n    dispatch(UserRequest());\n    return (0, _isomorphicFetch2['default'])(url + '/users', { method: 'GET' }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return dispatch(UserSuccess(data));\n    })['catch'](function (err) {\n      return dispatch(UserFailure(err));\n    });\n  };\n};\n\n// Single User \n\nfunction SingleUserRequest() {\n  return {\n    type: ACTIONS.GET_SINGLE_USER_REQUEST\n  };\n}\n\nfunction SingleUserSuccess(currentUser) {\n  return {\n    type: ACTIONS.GET_SINGLE_USER_SUCCESS,\n    currentUser: currentUser,\n    error: null\n  };\n}\n\nfunction SingleUserFailure(err) {\n  return {\n    type: ACTIONS.GET_SINGLE_USER_FAILURE,\n    error: err\n  };\n}\n\nfunction getUser(id) {\n  return function (dispatch) {\n    dispatch(SingleUserRequest());\n    return (0, _isomorphicFetch2['default'])(url + '/users/' + String(id), { method: 'GET' }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return dispatch(SingleUserSuccess(data));\n    })['catch'](function (err) {\n      return dispatch(SingleUserFailure(err));\n    });\n  };\n};\n\n// Get All Widget Data\n\nfunction WidgetRequest() {\n  return {\n    type: ACTIONS.GET_WIDGETS_REQUEST\n  };\n}\n\nfunction WidgetSuccess(widgets) {\n  var widgetsLength = widgets.length;\n\n  return {\n    type: ACTIONS.GET_WIDGETS_SUCCESS,\n    widgets: widgets,\n    widgetsLength: widgetsLength,\n    error: null\n  };\n}\n\nfunction WidgetFailure(err) {\n  return {\n    type: ACTIONS.GET_WIDGETS_FAILURE,\n    error: err\n  };\n}\n\nfunction getWidgets() {\n  return function (dispatch) {\n    dispatch(WidgetRequest());\n    return (0, _isomorphicFetch2['default'])(url + '/widgets', { method: 'GET' }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return dispatch(WidgetSuccess(data));\n    })['catch'](function (err) {\n      return dispatch(WidgetFailure(err));\n    });\n  };\n};\n\n// Single Widget \n\nfunction SingleWidgetRequest() {\n  return {\n    type: ACTIONS.GET_SINGLE_WIDGET_REQUEST\n  };\n}\n\nfunction SingleWidgetSuccess(currentWidget) {\n  return {\n    type: ACTIONS.GET_SINGLE_WIDGET_SUCCESS,\n    currentWidget: currentWidget,\n    error: null\n  };\n}\n\nfunction SingleWidgetFailure(err) {\n  return {\n    type: ACTIONS.GET_SINGLE_WIDGET_FAILURE,\n    error: err\n  };\n}\n\nfunction getWidget(id) {\n  return function (dispatch) {\n    dispatch(SingleWidgetRequest());\n    return (0, _isomorphicFetch2['default'])(url + '/widgets/' + String(id), { method: 'GET' }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return dispatch(SingleWidgetSuccess(data));\n    })['catch'](function (err) {\n      return dispatch(SingleWidgetFailure(err));\n    });\n  };\n};\n\n// Post Widget\n\nfunction PostWidgetRequest() {\n  return {\n    type: ACTIONS.POST_WIDGET_REQUEST\n  };\n}\n\nfunction PostWidgetSuccess(currentWidget) {\n  return {\n    type: ACTIONS.POST_WIDGET_SUCCESS,\n    currentWidget: currentWidget,\n    error: null\n  };\n}\n\nfunction PostWidgetFailure(err) {\n  return {\n    type: ACTIONS.POST_WIDGET_FAILURE,\n    error: err\n  };\n}\n\nfunction createWidget(e, a) {\n  console.log(e, a);\n  return function (dispatch) {\n    dispatch(PostWidgetRequest());\n    return (0, _isomorphicFetch2['default'])(url + '/widgets', { method: 'POST' }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return dispatch(PostWidgetSuccess(data));\n    })['catch'](function (err) {\n      return dispatch(PostWidgetFailure(err));\n    });\n  };\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvYWN0aW9ucy9pbmRleC5qcz9jNGY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcblxuaW1wb3J0ICogYXMgQUNUSU9OUyBmcm9tICcuLi9jb25zdGFudHMvJztcblxuY29uc3QgdXJsID0gJ2h0dHA6Ly9zcGEudGdscncuY29tOjQwMDAnO1xuXG4vLyBHZXQgQWxsIFVzZXIgRGF0YVxuXG5mdW5jdGlvbiBVc2VyUmVxdWVzdCAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OUy5HRVRfVVNFUlNfUkVRVUVTVFxuICB9O1xufVxuXG5mdW5jdGlvbiBVc2VyU3VjY2VzcyAodXNlcnMpIHtcbiAgY29uc3QgdXNlcnNMZW5ndGggPSB1c2Vycy5sZW5ndGg7XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05TLkdFVF9VU0VSU19TVUNDRVNTLFxuICAgIHVzZXJzOiB1c2VycyxcbiAgICB1c2Vyc0xlbmd0aDogdXNlcnNMZW5ndGgsXG4gICAgZXJyb3I6IG51bGxcbiAgfTtcbn1cblxuZnVuY3Rpb24gVXNlckZhaWx1cmUgKGVycikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFDVElPTlMuR0VUX1VTRVJTX0ZBSUxVUkUsXG4gICAgZXJyb3I6IGVyclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlcnMgKCkge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKFVzZXJSZXF1ZXN0KCkpO1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9L3VzZXJzYCwge21ldGhvZDogJ0dFVCd9KVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKFVzZXJTdWNjZXNzKGRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGRpc3BhdGNoKFVzZXJGYWlsdXJlKGVycikpKTtcbiAgfTtcbn07XG5cbi8vIFNpbmdsZSBVc2VyIFxuXG5mdW5jdGlvbiBTaW5nbGVVc2VyUmVxdWVzdCAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OUy5HRVRfU0lOR0xFX1VTRVJfUkVRVUVTVFxuICB9O1xufVxuXG5mdW5jdGlvbiBTaW5nbGVVc2VyU3VjY2VzcyAoY3VycmVudFVzZXIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05TLkdFVF9TSU5HTEVfVVNFUl9TVUNDRVNTLFxuICAgIGN1cnJlbnRVc2VyOiBjdXJyZW50VXNlcixcbiAgICBlcnJvcjogbnVsbFxuICB9O1xufVxuXG5mdW5jdGlvbiBTaW5nbGVVc2VyRmFpbHVyZSAoZXJyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OUy5HRVRfU0lOR0xFX1VTRVJfRkFJTFVSRSxcbiAgICBlcnJvcjogZXJyXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyIChpZCkge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKFNpbmdsZVVzZXJSZXF1ZXN0KCkpO1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9L3VzZXJzLyR7aWR9YCwge21ldGhvZDogJ0dFVCd9KVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKFNpbmdsZVVzZXJTdWNjZXNzKGRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGRpc3BhdGNoKFNpbmdsZVVzZXJGYWlsdXJlKGVycikpKTtcbiAgfTtcbn07XG5cbi8vIEdldCBBbGwgV2lkZ2V0IERhdGFcblxuZnVuY3Rpb24gV2lkZ2V0UmVxdWVzdCAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OUy5HRVRfV0lER0VUU19SRVFVRVNUXG4gIH07XG59XG5cbmZ1bmN0aW9uIFdpZGdldFN1Y2Nlc3MgKHdpZGdldHMpIHtcbiAgY29uc3Qgd2lkZ2V0c0xlbmd0aCA9IHdpZGdldHMubGVuZ3RoO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OUy5HRVRfV0lER0VUU19TVUNDRVNTLFxuICAgIHdpZGdldHM6IHdpZGdldHMsXG4gICAgd2lkZ2V0c0xlbmd0aDogd2lkZ2V0c0xlbmd0aCxcbiAgICBlcnJvcjogbnVsbFxuICB9O1xufVxuXG5mdW5jdGlvbiBXaWRnZXRGYWlsdXJlIChlcnIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05TLkdFVF9XSURHRVRTX0ZBSUxVUkUsXG4gICAgZXJyb3I6IGVyclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2lkZ2V0cyAoKSB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2goV2lkZ2V0UmVxdWVzdCgpKTtcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfS93aWRnZXRzYCwge21ldGhvZDogJ0dFVCd9KVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKFdpZGdldFN1Y2Nlc3MoZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gZGlzcGF0Y2goV2lkZ2V0RmFpbHVyZShlcnIpKSk7XG4gIH07XG59O1xuXG4vLyBTaW5nbGUgV2lkZ2V0IFxuXG5mdW5jdGlvbiBTaW5nbGVXaWRnZXRSZXF1ZXN0ICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05TLkdFVF9TSU5HTEVfV0lER0VUX1JFUVVFU1RcbiAgfTtcbn1cblxuZnVuY3Rpb24gU2luZ2xlV2lkZ2V0U3VjY2VzcyAoY3VycmVudFdpZGdldCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFDVElPTlMuR0VUX1NJTkdMRV9XSURHRVRfU1VDQ0VTUyxcbiAgICBjdXJyZW50V2lkZ2V0OiBjdXJyZW50V2lkZ2V0LFxuICAgIGVycm9yOiBudWxsXG4gIH07XG59XG5cbmZ1bmN0aW9uIFNpbmdsZVdpZGdldEZhaWx1cmUgKGVycikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFDVElPTlMuR0VUX1NJTkdMRV9XSURHRVRfRkFJTFVSRSxcbiAgICBlcnJvcjogZXJyXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXaWRnZXQgKGlkKSB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2goU2luZ2xlV2lkZ2V0UmVxdWVzdCgpKTtcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfS93aWRnZXRzLyR7aWR9YCwge21ldGhvZDogJ0dFVCd9KVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKFNpbmdsZVdpZGdldFN1Y2Nlc3MoZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gZGlzcGF0Y2goU2luZ2xlV2lkZ2V0RmFpbHVyZShlcnIpKSk7XG4gIH07XG59O1xuXG4vLyBQb3N0IFdpZGdldFxuXG5mdW5jdGlvbiBQb3N0V2lkZ2V0UmVxdWVzdCAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OUy5QT1NUX1dJREdFVF9SRVFVRVNUXG4gIH07XG59XG5cbmZ1bmN0aW9uIFBvc3RXaWRnZXRTdWNjZXNzIChjdXJyZW50V2lkZ2V0KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OUy5QT1NUX1dJREdFVF9TVUNDRVNTLFxuICAgIGN1cnJlbnRXaWRnZXQ6IGN1cnJlbnRXaWRnZXQsXG4gICAgZXJyb3I6IG51bGxcbiAgfTtcbn1cblxuZnVuY3Rpb24gUG9zdFdpZGdldEZhaWx1cmUgKGVycikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFDVElPTlMuUE9TVF9XSURHRVRfRkFJTFVSRSxcbiAgICBlcnJvcjogZXJyXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXaWRnZXQgKGUsIGEpIHtcbiAgY29uc29sZS5sb2coZSwgYSk7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2goUG9zdFdpZGdldFJlcXVlc3QoKSk7XG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0vd2lkZ2V0c2AsIHttZXRob2Q6ICdQT1NUJ30pXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goUG9zdFdpZGdldFN1Y2Nlc3MoZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gZGlzcGF0Y2goUG9zdFdpZGdldEZhaWx1cmUoZXJyKSkpO1xuICB9O1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNsaWVudC9zcmMvYWN0aW9ucy9pbmRleC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFnQ0E7QUFtQ0E7QUFzQ0E7QUFtQ0E7QUFtQ0E7QUFDQTtBQWhMQTtBQUNBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})