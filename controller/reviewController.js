const Review = require('../models/Review');

exports.addReview = async (req, res) => {
  const existing = await Review.findOne({ book: req.params.id, user: req.user.id });
  if (existing) return res.status(400).json({ message: 'Review exists' });
  const review = await Review.create({ ...req.body, book: req.params.id, user: req.user.id });
  res.status(201).json(review);
};

exports.updateReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.user.id)
    return res.status(403).json({ message: 'Forbidden' });
  Object.assign(review, req.body);
  await review.save();
  res.json(review);
};

exports.deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.user.id)
    return res.status(403).json({ message: 'Forbidden' });
  await review.remove();
  res.json({ message: 'Deleted' });
};