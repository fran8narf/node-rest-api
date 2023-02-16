// importamos express en una constante para utilizarlo.
const express = require('express');

// our server -> contains all routes, methods, etc.
const app = express();

// port used
app.listen(3000);
console.log(`server on port`, 3000);