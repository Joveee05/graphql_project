const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

mongoose.exports = mongoose.model('Author', authorSchema);
