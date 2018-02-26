const express = require('express')
const Films   = require('../client/src/models/films.js')
const Review  = require('../client/src/models/review.js')

const reviewRouter  = new express.Router()

const films = new Films()

// CREATE - a new reivew on a film
// localhost:3000/reviews?filmId=#
reviewRouter.post('/', function(req, res) {
  const filmId  = req.query.filmId
  const review  = new Review(req.body.review)
  films[filmId].addReview(review)
  res.json(films[filmId])
})


module.exports = reviewRouter
