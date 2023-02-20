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
    console.log(req.params.id);
    const collection = await Collection.findById(req.params.id);
    res.json(collection);
  } catch(err) {
    console.log(`Error FINDING COLLECTION: ${req.params.id} <<--------<`);
    console.log(err);
  }
};

export const deleteCollection = async (req, res) => {
  try {
    const collectionToDelete = await Collection.findByIdAndDelete(req.params.id);  
    res.json(collectionToDelete);
    console.log(collectionToDelete + 'was deleted!!!!!!!!!!');
  } catch(err) {
    console.log(`Error DELETING COLLECTION: ${req.params.id} <<--------<`);
    console.log(err);
  }
};

export const updateCollection = async (req, res) => {
  try {
    await Collection.findByIdAndUpdate(req.params.id, req.body);
    res.json('Task was successfully updated!!!');
  } catch(err) {
    console.log(`Error UPDATING COLLECTION: ${req.params.id} <<--------<`);
    console.log(err);
  }
};