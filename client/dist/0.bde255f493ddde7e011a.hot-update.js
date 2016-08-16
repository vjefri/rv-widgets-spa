webpackHotUpdate(0,{

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getUsers = getUsers;\nexports.getUser = getUser;\nexports.getWidgets = getWidgets;\nexports.getWidget = getWidget;\n\nvar _isomorphicFetch = __webpack_require__(302);\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _constants = __webpack_require__(133);\n\nvar ACTIONS = _interopRequireWildcard(_constants);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar url = 'http://spa.tglrw.com:4000';\n\n// Get All User Data\n\nfunction UserRequest() {\n  return {\n    type: ACTIONS.GET_USERS_REQUEST\n  };\n}\n\nfunction UserSuccess(users) {\n  var usersLength = users.length;\n\n  return {\n    type: ACTIONS.GET_USERS_SUCCESS,\n    users: users,\n    usersLength: usersLength,\n    error: null\n  };\n}\n\nfunction UserFailure(err) {\n  return {\n    type: ACTIONS.GET_USERS_FAILURE,\n    error: err\n  };\n}\n\nfunction getUsers() {\n  return function (dispatch) {\n    dispatch(UserRequest());\n    return (0, _isomorphicFetch2['default'])(url + '/users', { method: 'GET' }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return dispatch(UserSuccess(data));\n    })['catch'](function (err) {\n      return dispatch(UserFailure(err));\n    });\n  };\n};\n\n// Single User \n\nfunction SingleUserRequest() {\n  return {\n    type: ACTIONS.GET_SINGLE_USER_REQUEST\n  };\n}\n\nfunction SingleUserSuccess(currentUser) {\n  return {\n    type: ACTIONS.GET_SINGLE_USER_SUCCESS,\n    currentUser: currentUser,\n    error: null\n  };\n}\n\nfunction SingleUserFailure(err) {\n  return {\n    type: ACTIONS.GET_SINGLE_USER_FAILURE,\n    error: err\n  };\n}\n\nfunction getUser(id) {\n  return function (dispatch) {\n    dispatch(SingleUserRequest());\n    return (0, _isomorphicFetch2['default'])(url + '/users/' + String(id), { method: 'GET' }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return dispatch(SingleUserSuccess(data));\n    })['catch'](function (err) {\n      return dispatch(SingleUserFailure(err));\n    });\n  };\n};\n\n// Get All Widget Data\n\nfunction WidgetRequest() {\n  return {\n    type: ACTIONS.GET_WIDGETS_REQUEST\n  };\n}\n\nfunction WidgetSuccess(widgets) {\n  var widgetsLength = widgets.length;\n\n  return {\n    type: ACTIONS.GET_WIDGETS_SUCCESS,\n    widgets: widgets,\n    widgetsLength: widgetsLength,\n    error: null\n  };\n}\n\nfunction WidgetFailure(err) {\n  return {\n    type: ACTIONS.GET_WIDGETS_FAILURE,\n    error: err\n  };\n}\n\nfunction getWidgets() {\n  return function (dispatch) {\n    dispatch(WidgetRequest());\n    return (0, _isomorphicFetch2['default'])(url + '/widgets', { method: 'GET' }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return dispatch(WidgetSuccess(data));\n    })['catch'](function (err) {\n      return dispatch(WidgetFailure(err));\n    });\n  };\n};\n\n// Single Widget \n\nfunction SingleWidgetRequest() {\n  return {\n    type: ACTIONS.GET_SINGLE_WIDGET_REQUEST\n  };\n}\n\nfunction SingleWidgetSuccess(currentWidget) {\n  return {\n    type: ACTIONS.GET_SINGLE_WIDGET_SUCCESS,\n    currentWidget: currentWidget,\n    error: null\n  };\n}\n\nfunction SingleWidgetFailure(err) {\n  return {\n    type: ACTIONS.GET_SINGLE_WIDGET_FAILURE,\n    error: err\n  };\n}\n\nfunction getWidget(id) {\n  return function (dispatch) {\n    dispatch(SingleWidgetRequest());\n    return (0, _isomorphicFetch2['default'])(url + '/widgets/' + String(id), { method: 'GET' }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return dispatch(SingleWidgetSuccess(data));\n    })['catch'](function (err) {\n      return dispatch(SingleWidgetFailure(err));\n    });\n  };\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvYWN0aW9ucy9pbmRleC5qcz9jNGY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcblxuaW1wb3J0ICogYXMgQUNUSU9OUyBmcm9tICcuLi9jb25zdGFudHMvJztcblxuY29uc3QgdXJsID0gJ2h0dHA6Ly9zcGEudGdscncuY29tOjQwMDAnO1xuXG4vLyBHZXQgQWxsIFVzZXIgRGF0YVxuXG5mdW5jdGlvbiBVc2VyUmVxdWVzdCAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OUy5HRVRfVVNFUlNfUkVRVUVTVFxuICB9O1xufVxuXG5mdW5jdGlvbiBVc2VyU3VjY2VzcyAodXNlcnMpIHtcbiAgY29uc3QgdXNlcnNMZW5ndGggPSB1c2Vycy5sZW5ndGg7XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05TLkdFVF9VU0VSU19TVUNDRVNTLFxuICAgIHVzZXJzOiB1c2VycyxcbiAgICB1c2Vyc0xlbmd0aDogdXNlcnNMZW5ndGgsXG4gICAgZXJyb3I6IG51bGxcbiAgfTtcbn1cblxuZnVuY3Rpb24gVXNlckZhaWx1cmUgKGVycikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFDVElPTlMuR0VUX1VTRVJTX0ZBSUxVUkUsXG4gICAgZXJyb3I6IGVyclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlcnMgKCkge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKFVzZXJSZXF1ZXN0KCkpO1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9L3VzZXJzYCwge21ldGhvZDogJ0dFVCd9KVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKFVzZXJTdWNjZXNzKGRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGRpc3BhdGNoKFVzZXJGYWlsdXJlKGVycikpKTtcbiAgfTtcbn07XG5cbi8vIFNpbmdsZSBVc2VyIFxuXG5mdW5jdGlvbiBTaW5nbGVVc2VyUmVxdWVzdCAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OUy5HRVRfU0lOR0xFX1VTRVJfUkVRVUVTVFxuICB9O1xufVxuXG5mdW5jdGlvbiBTaW5nbGVVc2VyU3VjY2VzcyAoY3VycmVudFVzZXIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05TLkdFVF9TSU5HTEVfVVNFUl9TVUNDRVNTLFxuICAgIGN1cnJlbnRVc2VyOiBjdXJyZW50VXNlcixcbiAgICBlcnJvcjogbnVsbFxuICB9O1xufVxuXG5mdW5jdGlvbiBTaW5nbGVVc2VyRmFpbHVyZSAoZXJyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OUy5HRVRfU0lOR0xFX1VTRVJfRkFJTFVSRSxcbiAgICBlcnJvcjogZXJyXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyIChpZCkge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKFNpbmdsZVVzZXJSZXF1ZXN0KCkpO1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9L3VzZXJzLyR7aWR9YCwge21ldGhvZDogJ0dFVCd9KVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKFNpbmdsZVVzZXJTdWNjZXNzKGRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGRpc3BhdGNoKFNpbmdsZVVzZXJGYWlsdXJlKGVycikpKTtcbiAgfTtcbn07XG5cbi8vIEdldCBBbGwgV2lkZ2V0IERhdGFcblxuZnVuY3Rpb24gV2lkZ2V0UmVxdWVzdCAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OUy5HRVRfV0lER0VUU19SRVFVRVNUXG4gIH07XG59XG5cbmZ1bmN0aW9uIFdpZGdldFN1Y2Nlc3MgKHdpZGdldHMpIHtcbiAgY29uc3Qgd2lkZ2V0c0xlbmd0aCA9IHdpZGdldHMubGVuZ3RoO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OUy5HRVRfV0lER0VUU19TVUNDRVNTLFxuICAgIHdpZGdldHM6IHdpZGdldHMsXG4gICAgd2lkZ2V0c0xlbmd0aDogd2lkZ2V0c0xlbmd0aCxcbiAgICBlcnJvcjogbnVsbFxuICB9O1xufVxuXG5mdW5jdGlvbiBXaWRnZXRGYWlsdXJlIChlcnIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05TLkdFVF9XSURHRVRTX0ZBSUxVUkUsXG4gICAgZXJyb3I6IGVyclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2lkZ2V0cyAoKSB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2goV2lkZ2V0UmVxdWVzdCgpKTtcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfS93aWRnZXRzYCwge21ldGhvZDogJ0dFVCd9KVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKFdpZGdldFN1Y2Nlc3MoZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gZGlzcGF0Y2goV2lkZ2V0RmFpbHVyZShlcnIpKSk7XG4gIH07XG59O1xuXG4vLyBTaW5nbGUgV2lkZ2V0IFxuXG5mdW5jdGlvbiBTaW5nbGVXaWRnZXRSZXF1ZXN0ICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05TLkdFVF9TSU5HTEVfV0lER0VUX1JFUVVFU1RcbiAgfTtcbn1cblxuZnVuY3Rpb24gU2luZ2xlV2lkZ2V0U3VjY2VzcyAoY3VycmVudFdpZGdldCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFDVElPTlMuR0VUX1NJTkdMRV9XSURHRVRfU1VDQ0VTUyxcbiAgICBjdXJyZW50V2lkZ2V0OiBjdXJyZW50V2lkZ2V0LFxuICAgIGVycm9yOiBudWxsXG4gIH07XG59XG5cbmZ1bmN0aW9uIFNpbmdsZVdpZGdldEZhaWx1cmUgKGVycikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFDVElPTlMuR0VUX1NJTkdMRV9XSURHRVRfRkFJTFVSRSxcbiAgICBlcnJvcjogZXJyXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXaWRnZXQgKGlkKSB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2goU2luZ2xlV2lkZ2V0UmVxdWVzdCgpKTtcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfS93aWRnZXRzLyR7aWR9YCwge21ldGhvZDogJ0dFVCd9KVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKFNpbmdsZVdpZGdldFN1Y2Nlc3MoZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gZGlzcGF0Y2goU2luZ2xlV2lkZ2V0RmFpbHVyZShlcnIpKSk7XG4gIH07XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY2xpZW50L3NyYy9hY3Rpb25zL2luZGV4LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7OztBQWdDQTtBQW1DQTtBQXNDQTtBQW1DQTtBQUNBO0FBN0lBO0FBQ0E7OztBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(6);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(90);\n\nvar _redux = __webpack_require__(78);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SingleWidget = function (_Component) {\n  _inherits(SingleWidget, _Component);\n\n  function SingleWidget(props) {\n    _classCallCheck(this, SingleWidget);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(SingleWidget).call(this, props));\n  }\n\n  _createClass(SingleWidget, [{\n    key: 'render',\n    value: function () {\n      function render() {\n        var currentWidget = this.props.currentWidget;\n\n\n        return _react2['default'].createElement(\n          'div',\n          { className: 'row' },\n          _react2['default'].createElement(\n            'div',\n            { className: 'col-lg-12' },\n            _react2['default'].createElement(\n              'div',\n              { className: 'widget' },\n              _react2['default'].createElement(\n                'div',\n                { className: 'widget-header' },\n                'Users'\n              ),\n              _react2['default'].createElement(\n                'div',\n                { className: 'table-responsive' },\n                _react2['default'].createElement(\n                  'table',\n                  { className: 'table' },\n                  _react2['default'].createElement(\n                    'thead',\n                    null,\n                    _react2['default'].createElement(\n                      'tr',\n                      null,\n                      _react2['default'].createElement(\n                        'th',\n                        { className: 'text-center' },\n                        'ID'\n                      ),\n                      _react2['default'].createElement(\n                        'th',\n                        null,\n                        'Name'\n                      ),\n                      _react2['default'].createElement(\n                        'th',\n                        null,\n                        'Color'\n                      ),\n                      _react2['default'].createElement(\n                        'th',\n                        null,\n                        'Price'\n                      ),\n                      _react2['default'].createElement(\n                        'th',\n                        null,\n                        'Melts?'\n                      ),\n                      _react2['default'].createElement(\n                        'th',\n                        null,\n                        'Inventory'\n                      )\n                    )\n                  ),\n                  _react2['default'].createElement(\n                    'tbody',\n                    null,\n                    _react2['default'].createElement(\n                      'tr',\n                      null,\n                      _react2['default'].createElement(\n                        'td',\n                        null,\n                        currentWidget ? currentWidget.id : console.log('pending...')\n                      ),\n                      _react2['default'].createElement(\n                        'td',\n                        null,\n                        currentWidget ? currentWidget.name : console.log('pending...')\n                      ),\n                      _react2['default'].createElement(\n                        'td',\n                        { className: 'text-center' },\n                        currentWidget ? currentWidget.color : console.log('pending...')\n                      ),\n                      _react2['default'].createElement(\n                        'td',\n                        null,\n                        currentWidget ? currentWidget.price : console.log('pending...')\n                      ),\n                      _react2['default'].createElement(\n                        'td',\n                        null,\n                        currentWidget ? currentWidget.melts : console.log('pending...')\n                      ),\n                      _react2['default'].createElement(\n                        'td',\n                        null,\n                        currentWidget ? currentWidget.inventory : console.log('pending...')\n                      )\n                    )\n                  )\n                )\n              )\n            )\n          )\n        );\n      }\n\n      return render;\n    }()\n  }]);\n\n  return SingleWidget;\n}(_react.Component);\n\nSingleWidget.contextTypes = {\n  router: _react.PropTypes.object\n};\n\nfunction mapStateToProps(state) {\n  return {\n    currentWidget: state.main.currentWidget\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({}, dispatch);\n}\n\nSingleWidget.propTypes = {};\n\nexports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SingleWidget);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzI3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29udGFpbmVycy9TaW5nbGVXaWRnZXQuanM/Y2JjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuXG5jbGFzcyBTaW5nbGVXaWRnZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgY3VycmVudFdpZGdldCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy0xMic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dpZGdldCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2lkZ2V0LWhlYWRlcic+XG4gICAgICAgICAgICAgIFVzZXJzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZS1yZXNwb25zaXZlJz5cbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgIElEXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICBDb2xvclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgIE1lbHRzP1xuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgSW52ZW50b3J5XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRXaWRnZXQgPyBjdXJyZW50V2lkZ2V0LmlkIDogY29uc29sZS5sb2coJ3BlbmRpbmcuLi4nKX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50V2lkZ2V0ID8gY3VycmVudFdpZGdldC5uYW1lIDogY29uc29sZS5sb2coJ3BlbmRpbmcuLi4nKX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50V2lkZ2V0ID8gY3VycmVudFdpZGdldC5jb2xvciA6IGNvbnNvbGUubG9nKCdwZW5kaW5nLi4uJyl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFdpZGdldCA/IGN1cnJlbnRXaWRnZXQucHJpY2UgOiBjb25zb2xlLmxvZygncGVuZGluZy4uLicpfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRXaWRnZXQgPyBjdXJyZW50V2lkZ2V0Lm1lbHRzIDogY29uc29sZS5sb2coJ3BlbmRpbmcuLi4nKX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50V2lkZ2V0ID8gY3VycmVudFdpZGdldC5pbnZlbnRvcnkgOiBjb25zb2xlLmxvZygncGVuZGluZy4uLicpfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TaW5nbGVXaWRnZXQuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyAoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50V2lkZ2V0OiBzdGF0ZS5tYWluLmN1cnJlbnRXaWRnZXRcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzIChkaXNwYXRjaCkge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHt9LCBkaXNwYXRjaCk7XG59XG5cblNpbmdsZVdpZGdldC5wcm9wVHlwZXMgPSB7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaW5nbGVXaWRnZXQpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY2xpZW50L3NyYy9jb250YWluZXJzL1NpbmdsZVdpZGdldC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWhCQTtBQURBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWhCQTtBQURBO0FBdkJBO0FBREE7QUFKQTtBQURBO0FBREE7QUEwREE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})