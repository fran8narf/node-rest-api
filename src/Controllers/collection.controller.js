import Collection from '../models/Collection';
import { getPagination } from '../libs/getPagination';

import path from "path";
import sharp from 'sharp';
import fs from 'fs/promises';

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

export const addCollection = async (req, res) => {
  if (!req.body.name || !req.body.description || !req.body.itemsCount) {
    res.status(400).send({
      message: "Items send can not be empty",
    });
  }

  // Si existe una imagen cargada, guarda su ruta relativa en la base de datos
  let imagePath = null;
  if (req.file) {
    // Comprime la imagen antes de guardarla
    const compressedImage = await sharp(req.file.path)
      .resize({ width: 600 }) // Ajusta el ancho de la imagen a 800 píxeles
      .jpeg({ quality: 70 }) // Comprime la imagen en formato JPEG con calidad del 70%
      .toBuffer(); // Devuelve la imagen en formato de buffer

    // Guarda la imagen comprimida en el servidor
    const uploadsFolder = path.resolve(__dirname, '../..', 'uploads');
    const compressedImagePath = path.join(uploadsFolder, `compressed-${req.file.filename}`);

    await fs.writeFile(compressedImagePath, compressedImage);

    // Elimina la imagen original del servidor
    await fs.unlink(req.file.path);

    // Guarda la ruta de la imagen comprimida en la base de datos
    imagePath = compressedImagePath;
  }

  try {
    const newCollection = new Collection({
      name: req.body.name,
      description: req.body.description,
      itemsCount: req.body.itemsCount,
      image: imagePath, // Agrega la propiedad 'image' al objeto newCollection
    });

    const collectionSaved = await newCollection.save();
    res.json(collectionSaved);
  } catch (err) {
    console.log("Error creating new COLLECTION <<--------<");
    console.log(err);
  }
};

/* export const addCollection = async (req, res) => {

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
    });

    const collectionSaved = await newCollection.save();
    res.json(collectionSaved);
  } catch (err) {
    console.log('Error creating new COLLECTION <<--------<');
    console.log(err);
  }
}; */

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