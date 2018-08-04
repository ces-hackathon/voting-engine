'use strict';

var mongoose = require('mongoose'),
Games = mongoose.model('Games');

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

exports.get_game_votes = function(req, res) {
  Games.findById(req.params.gameId, function(err, trains) {
    if (err)
      res.send(err);
    res.json(trains);
  });
};

exports.cast_a_vote = function(req, res) {
    Games.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, trains) {
      if (err)
        res.send(err);
      res.json(trains);
    });
  };

exports.update_a_game = function(req, res) {
  Games.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, trains) {
    if (err)
      res.send(err);
    res.json(trains);
  });
};


exports.delete_a_game = function(req, res) {
  Games.remove({
    _id: req.params.taskId
  }, function(err, trains) {
    if (err)
      res.send(err);
    res.json({ message: 'Games successfully deleted' });
  });
};

exports.add_user_to_game = function(req, res) {
    Games.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, trains) {
      if (err)
        res.send(err);
      res.json(trains);
    });
  };
