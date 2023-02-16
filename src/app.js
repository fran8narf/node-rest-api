// importamos express en una constante para utilizarlo.
// const express = require('express'); forma antigua sin BABEL-ENV
// Movemos todo a APP para diferenciar contenidos.
// APP -> configuración del servidor.
// index -> arranque del servidor.
// routes -> definición de las urls.
import express from 'express';
import GCollectionRoutes from './routes/gamesCollection.routes';

// our server -> contains all routes, methods, etc.
const app = express();

app.get('/', (req, res) => {
  res.json({
    message : 'Welcome to my COLLECTION-REST-API'
  })
});

app.use('/api/collection',GCollectionRoutes);

export default app;