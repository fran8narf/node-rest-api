"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var videoGamesSchema = new _mongoose.Schema({
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
  pictures: {
    type: Array
  },
  releaseDate: {
    type: String,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
});
var _default = (0, _mongoose.model)('Videogame', videoGamesSchema);
exports["default"] = _default;