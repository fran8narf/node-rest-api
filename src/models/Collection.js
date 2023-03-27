import {Schema, model} from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

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
  },
  image : {
    type: String,
    required: false
  }
}, {
  // elimina el __v
  versionKey: false,
  // muestra el createdAt y el updatedAt
  timestamps: true
});

collectionSchema.plugin(mongoosePaginate);
export default model('Collection', collectionSchema);