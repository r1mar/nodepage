'use strict';

var indexModel = require('./index.model'),
    contactModel = require('./contact.model');

exports.index = function(req, res, next) {
  res.render('home/index', indexModel);
};

exports.contact = function(req, res, next) {
  res.render('home/contact', contactModel);
};