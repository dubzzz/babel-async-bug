"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function code(_x, _x2) {
  return _code.apply(this, arguments);
} // Example


function _code() {
  _code = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(p, methodName) {
    var _ref;

    var pAwaited,
        _len,
        args,
        _key,
        _args2 = arguments;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return p;

          case 2:
            pAwaited = _context2.sent;

            for (_len = _args2.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              args[_key - 2] = _args2[_key];
            }

            _context2.t0 = console;
            _context2.next = 7;
            return pAwaited[methodName].apply(pAwaited, args);

          case 7:
            _context2.t1 = _context2.sent;

            _context2.t0.log.call(_context2.t0, _context2.t1);

            _context2.t2 = console;
            _context2.next = 12;
            return p;

          case 12:
            _context2.t3 = methodName;
            _context2.t4 = _ref;
            _context2.t5 = args;
            _context2.next = 17;
            return (_ref = _context2.sent)[_context2.t3].apply(_context2.t4, _context2.t5);

          case 17:
            _context2.t6 = _context2.sent;

            _context2.t2.log.call(_context2.t2, _context2.t6);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _code.apply(this, arguments);
}

var instance = {
  x: 0,
  y: 1,
  print: function print() {
    var _this = this;

    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", Promise.resolve("".concat(_this.x, " ").concat(_this.y)));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};
var promiseInstance = Promise.resolve(instance);
code(promiseInstance, "print");