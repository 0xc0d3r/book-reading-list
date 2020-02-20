const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

module.exports = new model('Book', bookSchema);
