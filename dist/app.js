"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _collection = _interopRequireDefault(require("./routes/collection.routes"));
// importamos express en una constante para utilizarlo.
// const express = require('express'); forma antigua sin BABEL-ENV

// our server -> contains all routes, methods, etc.
var app = (0, _express["default"])();
app.set('port', process.env.PORT || 3030);

// CORS
// const corsOptions = {origin : 'http://localhost:3000'};
app.use((0, _cors["default"])());

// MORGAN
app.use((0, _morgan["default"])('dev'));
//JSON
app.use(_express["default"].json());

// Habilita el entendimiento de las peticiones desde formularios HTML.
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use('/api/collections', _collection["default"]);
var _default = app;
exports["default"] = _default;