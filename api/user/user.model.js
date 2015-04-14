'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  lastName: String,
  rol: String,
  email: String,
  user: String,
  password: String,
  type: { type: String, default: 'user' },
  active: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);