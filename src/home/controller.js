'use strict';

var model = require('./index.model');

exports.index = function(req, res, next) {
  res.render('home/index', model);
};