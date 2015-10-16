'use strict'

var _ = require('lodash');
var names = require('./db').names;

exports.guess = function(name) {
  name = name.trim().toLowerCase();
  var gender = _.result(_.find(names, function(chr) {
    return chr.name === name;
  }), 'sex');
  return gender;
}
