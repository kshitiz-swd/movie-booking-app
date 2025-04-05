// genre.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  genreid: { type: Number, required: true },
  genre: { type: String, required: true }
});

const Genre = mongoose.model('Genre', genreSchema);
module.exports = Genre;
