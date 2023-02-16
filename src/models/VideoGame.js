import { Schema, model } from "mongoose";

const videoGamesSchema = new Schema({
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
  pictures: {
    type: Array
  },
  releaseDate : {
    type: String,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
});

export default model('Videogame', videoGamesSchema);