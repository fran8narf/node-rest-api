import { Router } from 'express';
import Collection from '../models/Collection';

const router = Router();

router.get('/', (req, res) => {
  res.send('COLLECTION');
});

router.post('/', async (req, res) => {
  // Creamos un nuevo objeto de tipo Collection 
  // y asignamos sus valores con lo que lleva
  // la request en 'body'.
  const newCollection = new Collection({
    name : req.body.name,
    description : req.body.description,
    itemsCount : req.body.itemsCount
  });

  //Guardamos en la db de mongo.
  await newCollection.save();

  console.log('SAVING: ', newCollection);
  res.json('Saving new collection');
});

export default router;