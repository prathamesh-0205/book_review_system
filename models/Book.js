const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id:String,
  title: String,
  author: String,
  genre: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Book', bookSchema);