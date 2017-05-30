'use strict';

exports.setLocale = function(req, res, next) {
  res.cookie('nodepage-locales', req.body.language, { maxAge: 900000, httpOnly: true });
};