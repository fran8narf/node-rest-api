"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVideoGames = exports.addVideoGame = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _VideoGame = _interopRequireDefault(require("../models/VideoGame"));
var getVideoGames = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var videoGames;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _VideoGame["default"].find();
        case 2:
          videoGames = _context.sent;
          res.json(videoGames);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getVideoGames(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* export const findOneVideoGame = (req, res) => {
  res.json('one task');
}; */
exports.getVideoGames = getVideoGames;
var addVideoGame = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var newVideoGame, videoGameSaved;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          newVideoGame = new _VideoGame["default"]({
            name: req.body.name,
            description: req.body.description,
            releaseDate: req.body.releaseDate
          });
          _context2.next = 3;
          return newVideoGame.save();
        case 3:
          videoGameSaved = _context2.sent;
          res.json(videoGameSaved);
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function addVideoGame(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.addVideoGame = addVideoGame;