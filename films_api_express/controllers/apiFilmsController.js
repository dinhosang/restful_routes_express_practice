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
  films.push(req.body.film)
  res.send("Successfully posted a new film")
})

// UPDATE
apiFilmRouter.put('/:id', function(req, res) {
  films[req.params.id] = req.body.film
  res.json("Successfully updated film")
})

// DELETE
apiFilmRouter.delete('/:id', function(req, res) {
  films.splice(req.params.id, 1)
  res.json("Succesfully deleted film")
})

module.exports = apiFilmRouter;
