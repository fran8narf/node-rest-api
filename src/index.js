// importamos express en una constante para utilizarlo.
// const express = require('express'); forma antigua sin BABEL-ENV
import express from 'express';
import IndexRoutes from './routes/index';

// our server -> contains all routes, methods, etc.
const app = express();

app.get('/', (req, res) => {
  res.json({
    message : 'Welcome to my COLLECTION-REST-API'
  })
});

app.use(IndexRoutes);

// port used
app.set('port', process.env.PORT || 3030);
app.listen(app.get('port'));
console.log(`server on port`, app.get('port'));