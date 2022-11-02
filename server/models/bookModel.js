const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: String,
  genre: String,
  authorId: String,
});

mongoose.exports = mongoose.model('Book', bookSchema);
