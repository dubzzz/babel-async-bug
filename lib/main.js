"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function code(_x) {
  return _code.apply(this, arguments);
} // Example


function _code() {
  _code = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(p) {
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

            for (_len = _args.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = _args[_key];
            }

            console.log(pAwaited.print.apply(pAwaited, args)); // Works fine

            _context.t0 = console;
            _context.next = 8;
            return p;

          case 8:
            _context.t1 = _context.sent.print();

            _context.t0.log.call(_context.t0, _context.t1);

            _context.t2 = console;
            _context.next = 13;
            return p;

          case 13:
            _context.t3 = _ref;
            _context.t4 = args;
            _context.t5 = (_ref = _context.sent).print.apply(_context.t3, _context.t4);

            _context.t2.log.call(_context.t2, _context.t5);

          case 17:
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
code(promiseInstance);