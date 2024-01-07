const express=require('express');
const Router=express.Router();
const { getMovies, createMovie, updateMovie, deleteMovie } = require('../controllers/movieController');


Router.route('/').get(getMovies).post(createMovie)
Router.route('/:id').patch(updateMovie).delete(deleteMovie)

module.exports=Router;