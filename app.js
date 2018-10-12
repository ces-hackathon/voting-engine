let express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Game = require('./api/models/gameModel'), //created model loading here
  bodyParser = require('body-parser');

require('dotenv').config();

// mongoose instance connection url connection
let mongo_host = process.env.MONGO_HOST || '127.0.0.1'
let mongo_port = process.env.MONGO_PORT || '27017'

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + mongo_host + ':' + mongo_port + '/Gamedb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/votingRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) { //handle all other url requests
    res.status(404).send({url: req.originalUrl + ' not found'})
  });


app.listen(port);


console.log('voting RESTful API server started on: ' + port);
