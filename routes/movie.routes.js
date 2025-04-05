const express = require('express');
const Movie = require('../models/movie.model'); // Import the Movie model
const Genre = require('../models/genre.model');
const {findOne, findShows, findAllMovies} = require('../controllers/movie.controller')

const movieRoute = express.Router();

movieRoute.get('/movies', findAllMovies);

movieRoute.get('/movies/:movieId',findOne)

movieRoute.get('/movies/:movieId/shows', findShows)



module.exports = movieRoute;
