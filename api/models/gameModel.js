'use strict';
var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;


var GameSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: moment().toDate()
  },
  Expiration_date: {
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