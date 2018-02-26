//since we don't have a database we'll use our front end models at the moment
const films = require('../client/src/models/films')();
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');

const express     = require('express')
const apiFilmRouter  = new express.Router()

apiFilmRouter.get('/', function(req, res) {
  res.json(films)
})

module.exports = apiFilmRouter;
