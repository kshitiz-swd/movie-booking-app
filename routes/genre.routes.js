const express = require('express')

const genreRouter = express.Router()

const {findAllGenres} = require('../controllers/genre.controller')

genreRouter.get('/genres', findAllGenres);

module.exports = genreRouter