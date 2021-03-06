'use strict';
var moment = require('moment');
var mongoose = require('mongoose'),
Games = mongoose.model('Games');

//methods for /games route
exports.list_all_games = function(req, res) {
  Games.find({}, function(err, trains) {
    if (err)
      res.send(err);
    res.json(trains);
  });
};

exports.create_a_game = function(req, res) {
  var new_game = new Games(req.body);
  new_game.save(function(err, trains) {
    if (err)
      res.send(err);
    res.json(trains);
  });
};

//methods for /games/:gameId route
exports.get_game = function(req, res) {
  Games.findById(req.params.gameId, function(err, trains) {
    if (err)
      res.send(err);
    res.json(trains);
  });
};

exports.patch_game = function(req, res) {
    Games.findById(req.params.gameId, function(err, train) {
        if (err)
            res.send(err);
        train.status = req.body.status;
        train.save(function(err, train){
            if (err)
                res.send(err);
            res.json(train);
        });
    });
};

exports.delete_a_game = function(req, res) {
  Games.remove({
    _id: req.params.gameId
  }, function(err, trains) {
    if (err)
      res.send(err);
    res.json({ message: 'Games successfully deleted' });
  });
};

//methods for /games/:gameId/votes routes
exports.get_game_votes = function(req, res) {
    Games.findById(req.params.gameId, function(err, trains) {
      if (err)
        res.send(err);
      console.log(trains);
        res.json(trains.votes);
    });
  };

exports.cast_a_vote = function(req, res) {
    Games.findById({_id: req.params.gameId}, function(err, trains) {
      if (err) res.send(err);
      if (trains.status == 'completed') res.json({message: 'Game cannot be modified once it has completed'});
      var vote = {restaurant: req.body.rest, user: req.body.user, voteUp: !!req.body.voteUp};
      trains.votes.push(vote);
      var newExpiration = moment(trains.expiration_timer).add(5,'minutes').toDate();
      trains.expiration_timer = newExpiration;
      trains.save();
      res.json(trains);
    });
  };

exports.delete_a_vote = function(req, res) {
    Games.findById({_id: req.params.gameId}, function(err, trains) {
      if (err) res.send(err);
      if (trains.status == 'completed') res.json({message: 'Game cannot be modified once it has completed'});
      function IsTheVote(vote) {
          return !((vote.user == req.body.user) && (vote.restaurant == req.body.restaurant) && (vote.voteUp == !!req.body.voteUp)); 
      }
      trains.votes = trains.votes.filter(IsTheVote);
      trains.save();
      res.json(trains);
    });
  };

//methods for /games/:gameId/:userId route
exports.add_user_to_game = function(req, res) {
    Games.findById({_id: req.params.gameId}, function(err, trains) {
        if (err) res.send(err);
        if (trains.status == 'completed') res.json({message: 'Game cannot be modified once it has completed'});
        trains.users = trains.users.push(req.params.userId);
        trains.save();
        res.json(trains);
      });
  };

exports.remove_user_from_game = function(req, res) {
    Games.findById({_id: req.params.gameId}, function(err, trains) {
        if (err) res.send(err);
        if (trains.status == 'completed') res.json({message: 'Game cannot be modified once it has completed'});
        function ValidUser(user) {
            return !(user == req.params.userId);
        }
        trains.users = trains.users.filter(ValidUser);
        trains.save();
        res.json(trains);
    });
};

  //methods for /games/:gameId/:restId route
exports.list_all_rest = function(req, res) {
    Games.findById({_id: req.params.gameID}, function(err, trains) {
        if (err)
            res.send(err);
        console.log(trains);
            res.json(trains.restaurants);
        }

    )
}

exports.add_rest_to_game = function(req, res) {
    Games.findById({_id: req.params.gameId}, function(err, trains) {
        if (err) res.send(err);
        if (trains.status == 'completed') res.json({message: 'Game cannot be modified once it has completed'});
            trains.restaurants = trains.restaurants.push(req.params.restId);
        trains.save();
        res.json(trains);
      });
  };

  exports.remove_rest_from_game = function(req, res) {
    Games.findById({_id: req.params.gameId}, function(err, trains) {
        if (err) res.send(err);
        if (trains.status == 'completed') res.json({message: 'Game cannot be modified once it has completed'});
        function ValidRest(rest) {
            return !(rest == req.params.restId);
        }
        trains.restaurants = trains.restaurants.filter(ValidRest);
        trains.save();
        res.json(trains);
    });
  };
