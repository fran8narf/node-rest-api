import {Schema, model} from "mongoose";

const collectionSchema = new Schema({
  name : {
    type: String,
    required: true,
    trim: true
  },
  description : {
    type: String,
    required: true,
    trim: true
  },
  itemsCount : {
    type: Number,
    required: true
  }
}, {
  // elimina el __v
  versionKey: false,
  // muestra el createdAt y el updatedAt
  timestamps: true
});

export default model('Collection', collectionSchema);