webpackHotUpdate(0,{

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports['default'] = storeConfig;\n\nvar _redux = __webpack_require__(78);\n\nvar _reduxLogger = __webpack_require__(271);\n\nvar _reduxLogger2 = _interopRequireDefault(_reduxLogger);\n\nvar _reduxThunk = __webpack_require__(273);\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reduxPromise = __webpack_require__(272);\n\nvar _reduxPromise2 = _interopRequireDefault(_reduxPromise);\n\nvar _reducers = __webpack_require__(136);\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar logger = (0, _reduxLogger2['default'])();\n\nvar createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxPromise2['default'], logger, _reduxThunk2['default'])(_redux.createStore);\n\nfunction storeConfig(initialState) {\n  return createStoreWithMiddleware(_reducers2['default'], initialState);\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvc3RvcmUvaW5kZXguanM/MDNiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGNyZWF0ZUxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCBwcm9taXNlIGZyb20gJ3JlZHV4LXByb21pc2UnO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcblxuY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKCk7XG5cbmNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUoXG4gIHByb21pc2UsXG4gIGxvZ2dlcixcbiAgdGh1bmtcbikoY3JlYXRlU3RvcmUpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdG9yZUNvbmZpZyAoaW5pdGlhbFN0YXRlKSB7XG4gIHJldHVybiBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNsaWVudC9zcmMvc3RvcmUvaW5kZXguanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7O0FBY0E7QUFDQTtBQWZBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})