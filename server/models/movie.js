const moongoose=require('mongoose');

const movieSchema=new moongoose.Schema({
    name:{
    type:String,
    required:true
    },
    releaseDate:{
        type:Date,
        required:true
    }
})

movieSchema.pre('deleteOne', async function(next) {
    const result = await moongoose.model('Review').deleteMany({ movieId: this._conditions._id });
    next();
})

module.exports=moongoose.model('Movie',movieSchema);