'use strict';
var femaleNames = require('./female-names.json');
var maleNames = require('./male-names.json');

exports.guess = function(name) {
  name = name.trim().toLowerCase();
  if (maleNames.indexOf(name) >= 0) {
  	return 'm';
  }
  if (femaleNames.indexOf(name) >= 0) {
  	return 'f';
  }
};
