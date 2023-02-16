import Collection from '../models/Collection';

export const getCollections = async (req, res) => {
  console.log('get is fcking working');
  const collections = await Collection.find();
  res.json(collections);
};

export const addCollection = async (req, res) => {
  const newCollection = new Collection({
    name : req.body.name,
    description : req.body.description,
    itemsCount : req.body.itemsCount
  });

  const collectionSaved = await newCollection.save();
  res.json(collectionSaved);
};

export const findOneCollection = (req, res) => {
  res.json('one task');
};