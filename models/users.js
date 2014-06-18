'use strict';

var db = require('../lib/database');
var Promise = require('mpromise');

function User(name) {
  this.name = name;
}

User.prototype.save = function() {

  var promise = new Promise();

  var collection = db.get('users');

  var self = this;

    collection.insert({name: self.name}, function(err, docs) {
      process.nextTick(function() {
        if (err)  {
          promise.reject(err);
        }
        else {
          promise.fulfill(docs);
        }
      });
    });

  return promise;
}

module.exports = User;
