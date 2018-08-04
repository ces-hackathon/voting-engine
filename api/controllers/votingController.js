'use strict';

var mongoose = require('mongoose'),
Game = mongoose.model('Games');

exports.list_all_games = function(req, res) {
  Game.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_game = function(req, res) {
  var new_game = new Game(req.body);
  new_game.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.get_game_votes = function(req, res) {
  Game.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.cast_a_vote = function(req, res) {
    Game.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

exports.update_a_game = function(req, res) {
  Game.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_game = function(req, res) {
  Game.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Game successfully deleted' });
  });
};
