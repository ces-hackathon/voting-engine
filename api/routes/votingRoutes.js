'use strict';
module.exports = function(app) {
  var voter = require('../controllers/votingController');

  // Voting Routes
  app.route('/games')
    .get(voter.list_all_games)
    .post(voter.create_a_game);


  app.route('/games/:gameId')
    .get(voter.get_game_votes)
    .post(voter.cast_a_vote)
    .put(voter.update_a_game)
    .delete(voter.delete_a_game);

  app.route('/games/:gameId/:userId')
    .post(voter.add_user_to_game);
};
