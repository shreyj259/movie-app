const Movie = require('../models/movie')
const {StatusCodes} = require('http-status-codes')
const CustomError = require('../errors')

const getMovies = async (req, res) => {
  const movies = await Movie.find({})
  res.status(StatusCodes.OK).json(movies)
}


const createMovie = async (req, res) => {
  const movie = await Movie.create(req.body)
  res.status(StatusCodes.CREATED).json(movie)
}

const updateMovie = async (req, res) => {
  const {id: movieId} = req.params

  const movie = await Movie.findOneAndUpdate({_id: movieId}, req.body, {new: true, runValidators: true})

  if (!movie) {
    throw new CustomError.NotFoundError(`No movie with id : ${movieId}`)
  }

  res.status(StatusCodes.OK).json(movie)

}

const deleteMovie = async (req, res) => {
  const {id: movieId} = req.params;
  const movie = await Movie.findOne({_id: movieId});
  if (!movie) {
    throw new CustomError.NotFoundError(`No movie with id : ${movieId}`);
  }
  await movie.deleteOne();
  res.status(StatusCodes.OK).json(movie);
}

module.exports = {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie
}

