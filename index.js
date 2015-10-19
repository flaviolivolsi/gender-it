'use strict';

var names = {
  f: require('./female-names.json'),
  m: require('./male-names.json')
};

exports.guess = function(name) {
  name = name.trim().toLowerCase();
  for (var gender in names) {
    if (names[gender].indexOf(name) > -1)
      return gender;
  }
};

