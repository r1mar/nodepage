'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./controller');

/* GET home page. */
router.get('/', controller.index);
router.get('/contact', controller.contact);

module.exports = router;
