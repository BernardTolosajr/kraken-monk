'use strict';
var monk = require("monk");

var db = function() {
  return monk('localhost/monk');
}

module.exports = db();
