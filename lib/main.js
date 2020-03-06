"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function code(_x, _x2) {
  return _code.apply(this, arguments);
} // Example


function _code() {
  _code = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(p, methodName) {
    var _ref;

    var pAwaited,
        _len,
        args,
        _key,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return p;

          case 2:
            pAwaited = _context.sent;

            for (_len = _args.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              args[_key - 2] = _args[_key];
            }

            console.log(pAwaited[methodName].apply(pAwaited, args)); // Fails with "TypeError: Cannot read property 'x' of undefined"

            _context.t0 = console;
            _context.next = 8;
            return p;

          case 8:
            _context.t1 = methodName;
            _context.t2 = _ref;
            _context.t3 = args;
            _context.t4 = (_ref = _context.sent)[_context.t1].apply(_context.t2, _context.t3);

            _context.t0.log.call(_context.t0, _context.t4);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _code.apply(this, arguments);
}

var instance = {
  x: 0,
  y: 1,
  print: function print() {
    return "".concat(this.x, " ").concat(this.y);
  }
};
var promiseInstance = Promise.resolve(instance);
code(promiseInstance, "print");