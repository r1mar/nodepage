'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./controller');

/* GET home page. */
router.post('/', controller.setLocale);

module.exports = router;
