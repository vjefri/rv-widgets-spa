webpackHotUpdate(0,{

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(133);\n\nvar ACTIONS = _interopRequireWildcard(_constants);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }\n\nvar INITIAL_STATE = {};\n\nexports['default'] = function () {\n  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case ACTIONS.UPDATE_EPISODE:\n      return _extends({}, state, {\n        isFetching: true,\n        episode: action.episode,\n        channel: action.channel\n      });\n    default:\n      return state;\n  }\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvcmVkdWNlcnMvbWFpbi5qcz83MzE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFDVElPTlMgZnJvbSAnLi4vY29uc3RhbnRzLyc7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFDVElPTlMuVVBEQVRFX0VQSVNPREU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICAgICAgZXBpc29kZTogYWN0aW9uLmVwaXNvZGUsXG4gICAgICAgIGNoYW5uZWw6IGFjdGlvbi5jaGFubmVsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjbGllbnQvc3JjL3JlZHVjZXJzL21haW4uanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQVRBO0FBV0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})