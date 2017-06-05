var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');

var error = require('./error/route');
var i18n = require('i18n');

var app = express();

// view engine setup
app.set('views', path.join(__dirname));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));

//Setup dirs with static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, '../node_modules/tether/dist')));
app.use(express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));

//setup translations
i18n.configure({
    locales:['en', 'de', 'ru' ],
    directory: __dirname + '/locales',
    //autoReload: true, Unit test did not works with this option
    cookie: "nodepage-locale",
    defaultLocale: 'en',
    objectNotation: true
});
app.use(i18n.init);

//Shared views middleware
app.use(function(req, res, next){
  res.locals.lang = req.getLocale();
  res.locals.originalUrl = req.originalUrl;
  next();
});

//Module routers
var home = require('./home/router');
var users = require('./user/router');
var locales = require('./locales/router');

app.use('/locales', locales);
app.use('/', home);
app.use('/user', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(error);

module.exports = app;
