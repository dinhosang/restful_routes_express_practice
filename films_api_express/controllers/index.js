const express = require('express')
const router  = new express.Router()

router.use('/api/films', require('./apiFilmsController.js'))
router.use('/reviews', require('./reviewsController.js'))

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

router.get('/about', function(req, res){
  res.json({data: "All about us!"});
})

module.exports = router;
