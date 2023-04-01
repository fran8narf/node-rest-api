import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import GCollectionRoutes from './routes/collection.routes';

// our server -> contains all routes, methods, etc.
const app = express();

app.set('port', process.env.PORT || 3030);


const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// CORS
// const corsOptions = {origin : 'http://localhost:3000'};
app.use(cors());

// MORGAN
app.use(morgan('dev'));
//JSON
app.use(express.json());

// Habilita el entendimiento de las peticiones desde formularios HTML.
app.use(express.urlencoded({ extended: false }));


app.use('/api/collections', GCollectionRoutes);

export default app;