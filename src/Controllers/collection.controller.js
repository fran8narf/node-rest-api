import Collection from '../models/Collection';
import { getPagination } from '../libs/getPagination';

export const getCollections = async (req, res) => {
  try {
    // paginate 1st empty object means to find all.
    const { size, page, name } = req.query;
    console.log(req.query);

    const condition = name ? {
      name : {$regex: new RegExp(name), $options: "i"}
    } : {};
    
    const { limit, offset } = getPagination(page, size);
    
    const collections = await Collection.paginate(condition, {offset, limit});
    res.json(collections);
  } catch (err) {
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
      message: 'Items send can not be empty'
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
  } catch (err) {
    console.log('Error creating new COLLECTION <<--------<');
    console.log(err);
  }
};

export const findOneCollection = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(id);
    const collection = await Collection.findById(id);
    if (!collection) return res.status(404).json({
      message: `The collection you're trying to find with id: ${id} doesn't exist`
    });
    res.json(collection);
  } catch (err) {
    res.status(500).json({
      message: err.message || `Error retrieving collection id: ${id}`
    });
  }
};

export const deleteCollection = async (req, res) => {
  const { id } = req.params;
  try {
    const collectionToDelete = await Collection.findByIdAndDelete(id);

    if (!collectionToDelete) return res.status(404).json({
      message: `The collection you're trying to delete with id: ${id} doesn't exist`
    });

    res.json(collectionToDelete);
    console.log(collectionToDelete + 'was deleted!!!!!!!!!!');
  } catch (err) {
    res.status(500).json({
      message: err.message || `Error while deleting collection with id: ${id}`
    });
  }
};

export const updateCollection = async (req, res) => {
  try {
    const { id } = req.params;
    const collectionToUpdate = await Collection.findByIdAndUpdate(id, req.body);

    if (!collectionToUpdate) return res.status(404).json({
      message: `The collection you're trying to updated with id: ${id} doesn't exist`
    });

    res.json('Task was successfully updated!!!');
  } catch (err) {
    res.status(500).json({
      message: err.message || `Error while trying to update collection with id: ${id}`
    });
  }
};