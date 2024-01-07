const mongoose=require('mongoose')

const reviewSchema=new mongoose.Schema({
    reviewerName:{
        type:String,
        required:[true,'Please provide your name']
    },
    ratings:{
        type:Number,
        required:[true,'Please provide rating'],
        min:[1,'Rating is invalid'],
        max:[10,'Rating is invalid']
    },
    comment:{
        type:String,
        required:[true,'Please provide comment']
    },
    movieId:{
        type:mongoose.Types.ObjectId,
        ref:'Movie',
        required:[true,'Please provide movie id'],
    }
})


module.exports=mongoose.model('Review',reviewSchema)