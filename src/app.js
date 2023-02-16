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

//JSON
app.use(express.json());

app.use('/api/collections',GCollectionRoutes);

export default app;