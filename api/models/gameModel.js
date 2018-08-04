'use strict';

var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;


var GameSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the lunch train'
  },
  restaurants: {
      type: [String]
  },
  votes: [{ restaurant: String, user: String, voteUp: Boolean }],
  users: {
      type: [String],
      required: 'At least one user is required to begin a lunch train'
  },
  location: {
    type: String
  },
  created_date: {
    type: Date,
    default: moment().toDate()
  },
  start_time: {
    type: Date,
    required: 'Desired lunch time must be entered'
  },
  expiration_date: {
    type: Date,
    default: moment().add(5, 'minutes').toDate()
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Games', GameSchema);