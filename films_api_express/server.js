const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('client/build'));
app.use(require(`${__dirname}/controllers/index.js`))

app.listen(3000, function () {
  console.log('App running on port '+this.address().port);
});
