const Book = require('../models/Book');
const Review = require('../models/Review');

exports.createBook = async (req, res) => {
  const book = await Book.create({ ...req.body, createdBy: req.user.id });
  res.status(201).json(book);
};

exports.getBooks = async (req, res) => {
  const { page = 1, limit = 10, author, genre } = req.query;
  const query = {};
  if (author) query.author = new RegExp(author, 'i');
  if (genre) query.genre = genre;
  const books = await Book.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit));
  res.json(books);
};

exports.getBookDetails = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Not found' });
  const reviews = await Review.find({ book: book._id });
  const avgRating =
    reviews.reduce((acc, r) => acc + r.rating, 0) / (reviews.length || 1);
  res.json({ book, avgRating, reviews });
};