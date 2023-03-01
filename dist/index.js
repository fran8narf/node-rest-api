"use strict";

var _app = _interopRequireDefault(require("./app"));
require("./database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// port used
_app["default"].set('port', process.env.PORT || 3030);
_app["default"].listen(_app["default"].get('port'));
console.log("server on port", _app["default"].get('port'));