// importamos express en una constante para utilizarlo.
// const express = require('express'); forma antigua sin BABEL-ENV

import express from 'express';
import GCollectionRoutes from './routes/collection.routes';

// our server -> contains all routes, methods, etc.
const app = express();

app.set('port', process.env.PORT || 3030);

//JSON
app.use(express.json());

app.use('/api/collections', GCollectionRoutes);

export default app;