// importamos express en una constante para utilizarlo.
// const express = require('express'); forma antigua sin BABEL-ENV
import express from 'express';

// our server -> contains all routes, methods, etc.
const app = express();

// port used
app.listen(3000);
console.log(`server on port`, 3000);