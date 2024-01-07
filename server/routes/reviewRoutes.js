const express=require('express');
const Router=express.Router();
const { createReview, updateReview, deleteReview, getReviews } = require('../controllers/reviewController');

Router.route('/').post(createReview);
Router.route('/:id').get(getReviews).patch(updateReview).delete(deleteReview);

module.exports=Router;