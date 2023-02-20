import Collection from '../models/Collection';

export const getCollections = async (req, res) => {
  const collections = await Collection.find();
  res.json(collections);
};

/* export const getCollectionsGreaterThan = async (req, res) => {
  const collections = await Collection.find({
    itemsCount : 15
  });
  res.json(collections);
}; */

export const addCollection = async (req, res) => {
  const newCollection = new Collection({
    name : req.body.name,
    description : req.body.description,
    itemsCount : req.body.itemsCount
    // validación para rellenar si no viene
    // itemsCount : req.body.itemsCount ? req.body.itemsCount : 0
  });

  const collectionSaved = await newCollection.save();
  res.json(collectionSaved);
};

export const findOneCollection = async (req, res) => {
  console.log(req.params.id);
  const collection = await Collection.findById(req.params.id);
  res.json(collection);
};

export const deleteCollection = async (req, res) => {
  const collectionToDelete = await Collection.findByIdAndDelete(req.params.id);

  res.json(collectionToDelete);
  console.log(collectionToDelete + 'was deleted!!!!!!!!!!');
};

export const updateCollection = async (req, res) => {
  await Collection.findByIdAndUpdate(req.params.id, req.body);
  res.json('Task was successfully updated!!!');
};