"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var collectionSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  itemsCount: {
    type: Number,
    required: true
  }
}, {
  // elimina el __v
  versionKey: false,
  // muestra el createdAt y el updatedAt
  timestamps: true
});
collectionSchema.plugin(_mongoosePaginateV["default"]);
var _default = (0, _mongoose.model)('Collection', collectionSchema);
exports["default"] = _default;