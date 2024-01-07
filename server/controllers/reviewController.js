const CustomError = require('../errors');
const Review=require('../models/review')
const {StatusCodes} = require('http-status-codes')


const createReview = async (req, res) => {
    const review=await Review.create(req.body);
    res.status(StatusCodes.CREATED).json({review});
}

const updateReview = async (req, res) => {
    const {id:reviewId}=req.params;
    const review=await Review.findOneAndUpdate({_id:reviewId},req.body,{new:true,runValidators:true});
    if(!review){
        throw new CustomError.NotFoundError(`No review with id : ${reviewId}`)
    }
    res.status(StatusCodes.OK).json({review});
}

const deleteReview = async (req, res) => {
    const {id:reviewId}=req.params;
    const review=await Review.findOneAndDelete({_id:reviewId});
    if(!review){
        throw new CustomError.NotFoundError(`No review with id : ${reviewId}`)
    }
    res.status(StatusCodes.OK).json({review});
}

const getReviews = async (req, res) => {
    const {id:movieId}=req.params;
    const reviews=await Review.find({movieId});
    res.status(StatusCodes.OK).json({reviews});
}

module.exports = {
  createReview,
  updateReview,
  deleteReview,
  getReviews
}


