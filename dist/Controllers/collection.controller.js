"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCollection = exports.getCollections = exports.findOneCollection = exports.deleteCollection = exports.addCollection = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Collection = _interopRequireDefault(require("../models/Collection"));
var _getPagination2 = require("../libs/getPagination");
var getCollections = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, size, page, name, condition, _getPagination, limit, offset, collections;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // paginate 1st empty object means to find all.
          _req$query = req.query, size = _req$query.size, page = _req$query.page, name = _req$query.name;
          console.log(req.query);
          condition = name ? {
            name: {
              $regex: new RegExp(name),
              $options: "i"
            }
          } : {};
          _getPagination = (0, _getPagination2.getPagination)(page, size), limit = _getPagination.limit, offset = _getPagination.offset;
          _context.next = 7;
          return _Collection["default"].paginate(condition, {
            offset: offset,
            limit: limit
          });
        case 7:
          collections = _context.sent;
          res.json(collections);
          _context.next = 15;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log('Error getting collections <<-------<');
          console.log(_context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function getCollections(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* export const getCollectionsGreaterThan = async (req, res) => {
  const collections = await Collection.find({
    itemsCount : 15
  });
  res.json(collections);
}; */
exports.getCollections = getCollections;
var addCollection = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var newCollection, collectionSaved;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!req.body.name || !req.body.description || !req.body.itemsCount) {
            res.status(400).send({
              message: 'Items send can not be empty'
            });
          }
          _context2.prev = 1;
          newCollection = new _Collection["default"]({
            name: req.body.name,
            description: req.body.description,
            itemsCount: req.body.itemsCount
            // validación para rellenar si no viene
            // itemsCount : req.body.itemsCount ? req.body.itemsCount : 0
          });
          _context2.next = 5;
          return newCollection.save();
        case 5:
          collectionSaved = _context2.sent;
          res.json(collectionSaved);
          _context2.next = 13;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          console.log('Error creating new COLLECTION <<--------<');
          console.log(_context2.t0);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return function addCollection(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.addCollection = addCollection;
var findOneCollection = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, collection;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          console.log(id);
          _context3.next = 5;
          return _Collection["default"].findById(id);
        case 5:
          collection = _context3.sent;
          if (collection) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: "The collection you're trying to find with id: ".concat(id, " doesn't exist")
          }));
        case 8:
          res.json(collection);
          _context3.next = 14;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](1);
          res.status(500).json({
            message: _context3.t0.message || "Error retrieving collection id: ".concat(id)
          });
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 11]]);
  }));
  return function findOneCollection(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.findOneCollection = findOneCollection;
var deleteCollection = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, collectionToDelete;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return _Collection["default"].findByIdAndDelete(id);
        case 4:
          collectionToDelete = _context4.sent;
          if (collectionToDelete) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: "The collection you're trying to delete with id: ".concat(id, " doesn't exist")
          }));
        case 7:
          res.json(collectionToDelete);
          console.log(collectionToDelete + 'was deleted!!!!!!!!!!');
          _context4.next = 14;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](1);
          res.status(500).json({
            message: _context4.t0.message || "Error while deleting collection with id: ".concat(id)
          });
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 11]]);
  }));
  return function deleteCollection(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteCollection = deleteCollection;
var updateCollection = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _id, collectionToUpdate;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _id = req.params.id;
          _context5.next = 4;
          return _Collection["default"].findByIdAndUpdate(_id, req.body);
        case 4:
          collectionToUpdate = _context5.sent;
          if (collectionToUpdate) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: "The collection you're trying to updated with id: ".concat(_id, " doesn't exist")
          }));
        case 7:
          res.json('Task was successfully updated!!!');
          _context5.next = 13;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            message: _context5.t0.message || "Error while trying to update collection with id: ".concat(id)
          });
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function updateCollection(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updateCollection = updateCollection;