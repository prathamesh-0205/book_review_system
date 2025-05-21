const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const authCtrl = require('../controller/authController');
const bookCtrl = require('../controller/bookController');
const reviewCtrl = require('../controller/reviewController');

router.post('/signup', authCtrl.signup);
router.post('/login', authCtrl.login);

router.post('/books', auth, bookCtrl.createBook);
router.get('/books', bookCtrl.getBooks);
router.get('/books/:id', bookCtrl.getBookDetails);
router.post('/books/:id/reviews', auth, reviewCtrl.addReview);

router.put('/reviews/:id', auth, reviewCtrl.updateReview);
router.delete('/reviews/:id', auth, reviewCtrl.deleteReview);



module.exports = router;