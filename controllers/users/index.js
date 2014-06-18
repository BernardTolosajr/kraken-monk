'use strict';

var db = require('../../lib/database');
var User = require('../../models/users');

module.exports = function (router) {

    var collection = db.get('users');

    router.get('/', function (req, res) {
      var user = new User('bernard');

      user.save().then(function(data) {
        res.json(data);
      }, function(err) {
        res.json({success: false});
      });

    });

};
