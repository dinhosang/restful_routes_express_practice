//since we don't have a database we'll use our front end models at the moment
const films = require('../client/src/models/films')();
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');

const express        = require('express')
const apiFilmRouter  = new express.Router()

// INDEX
apiFilmRouter.get('/', function(req, res) {
  res.json(films)
})

// SHOW
apiFilmRouter.get('/:id', function(req, res) {
  res.json(films[req.params.id])
})

// CREATE
apiFilmRouter.post('/', function(req, res) {
  const film = new Film(req.body.film)
  films.push(film)
  res.json(films)
  res.status(201).send()
})

// UPDATE
apiFilmRouter.put('/:id', function(req, res) {
  films[req.params.id] = new Film(req.body.film)
  res.json(films)
  res.status(200).send()
})

// DELETE
apiFilmRouter.delete('/:id', function(req, res) {
  films.splice(req.params.id, 1)
  res.json(films)
  res.status(200).send()
})

module.exports = apiFilmRouter;
