'use strict';
var i18n = require('i18n');

exports.setLocale = function(req, res, next) {
  //i18n.setLocale(req.body.lang);
  res.cookie('nodepage-locale', req.body.lang, { maxAge: 900000, httpOnly: true });
  res.redirect(req.body.redirectTo);
};