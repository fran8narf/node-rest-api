// importamos express en una constante para utilizarlo.
// const express = require('express'); forma antigua sin BABEL-ENV
import express from 'express';

// our server -> contains all routes, methods, etc.
const app = express();

// port used
app.set('port', process.env.PORT || 3030);
app.listen(app.get('port'));
console.log(`server on port`, app.get('port'));