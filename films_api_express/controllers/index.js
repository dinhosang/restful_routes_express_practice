const express = require('express')
const router  = new express.Router()

router.use('/api/films', require('./apiFilmsController.js'))
router.use('/reviews', require('./reviewsController.js'))

module.exports = router;
