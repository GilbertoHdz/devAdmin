'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  nik: String,
  password: String,
  f_ini: { type: Date, default: Date.now },
  active: { type: Boolean, default: true }
// hidden: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', UserSchema);