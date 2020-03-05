"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function code(p, methodName) {
  return (/*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _ref2;

        var _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = console;
                _context.next = 3;
                return p;

              case 3:
                _context.t1 = methodName;
                _context.t2 = _ref2;
                _context.t3 = _args;
                _context.next = 8;
                return (_ref2 = _context.sent)[_context.t1].apply(_context.t2, _context.t3);

              case 8:
                _context.t4 = _context.sent;
                return _context.abrupt("return", _context.t0.log.call(_context.t0, _context.t4));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function () {
        return _ref.apply(this, arguments);
      };
    }()
  );
} // Example


var instance = {
  x: 0,
  y: 1,
  print: function print() {
    var _this = this;

    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", Promise.resolve("".concat(_this.x, " ").concat(_this.y)));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
var promiseInstance = Promise.resolve(instance);
code(promiseInstance, "print")();