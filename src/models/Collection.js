import {Schema, model} from "mongoose";

const collectionSchema = new Schema({
  name : String,
  description : String,
  itemsCount : Number
});

export default model('Collection', collectionSchema);