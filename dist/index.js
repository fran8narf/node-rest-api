"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
require("./database");
// port used
_app["default"].set('port', process.env.PORT || 3030);
_app["default"].listen(_app["default"].get('port'));
console.log("server on port", _app["default"].get('port'));