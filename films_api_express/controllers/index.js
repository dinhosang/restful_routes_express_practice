const express = require('express')
const router  = new express.Router()

router.use('/api/films', require('./apiFilmsController.js'))

module.exports = router;
