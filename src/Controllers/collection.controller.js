import Collection from '../models/Collection';

export const getCollections = async (req, res) => {
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

export const findOneCollection = async (req, res) => {
  console.log(req.params.id);
  const collection = await Collection.findById(req.params.id);
  res.json(collection);
};