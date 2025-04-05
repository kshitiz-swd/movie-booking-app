const express = require('express')
const {findAllArtists} = require('../controllers/artist.controller')

const artistRouter = express.Router()

artistRouter.get('/artists',findAllArtists)

module.exports = artistRouter