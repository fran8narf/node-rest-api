import Collection from '../models/Collection';

export const getCollections = async (req, res) => {
  try {
    const collections = await Collection.find();
    res.json(collections);
  } catch(err) {
    console.log('Error getting collections <<-------<');
    console.log(err);
  }
}

/* export const getCollectionsGreaterThan = async (req, res) => {
  const collections = await Collection.find({
    itemsCount : 15
  });
  res.json(collections);
}; */

export const addCollection = async (req, res) => {

  if (!req.body.name || !req.body.description || !req.body.itemsCount) {
    res.status(400).send({
      message : 'Items send can not be empty'
    });
  }
  
  try {
    const newCollection = new Collection({
      name: req.body.name,
      description: req.body.description,
      itemsCount: req.body.itemsCount
      // validación para rellenar si no viene
      // itemsCount : req.body.itemsCount ? req.body.itemsCount : 0
    });
  
    const collectionSaved = await newCollection.save();
    res.json(collectionSaved);
  } catch(err) {
    console.log('Error creating new COLLECTION <<--------<');
    console.log(err);
  }
};

export const findOneCollection = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const collection = await Collection.findById(id);
    res.json(collection);
  } catch(err) {
    console.log(`Error FINDING COLLECTION: ${id} <<--------<`);
    console.log(err);
  }
};

export const deleteCollection = async (req, res) => {
  try {
    const { id } = req.params;
    const collectionToDelete = await Collection.findByIdAndDelete(id);  
    res.json(collectionToDelete);
    console.log(collectionToDelete + 'was deleted!!!!!!!!!!');
  } catch(err) {
    console.log(`Error DELETING COLLECTION: ${id} <<--------<`);
    console.log(err);
  }
};

export const updateCollection = async (req, res) => {
  try {
    const { id } = req.params;
    await Collection.findByIdAndUpdate(id, req.body);
    res.json('Task was successfully updated!!!');
  } catch(err) {
    console.log(`Error UPDATING COLLECTION: ${id} <<--------<`);
    console.log(err);
  }
};