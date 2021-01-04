require("./models/db");
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var customCors = require('./middlewares/cors.middleware');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.router');
var docsRouter = require('./routes/docs.router');
var recipesRouter = require('./routes/recipes.router')
var favoritesRouter = require('./routes/favorite.router')
var mealsRouter = require('./routes/meals.router')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(customCors);

require("./data/importRecipe")

app.use('/', indexRouter);
app.use('/api/v1', docsRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/recipes', recipesRouter);
app.use('/api/v1/favorites', favoritesRouter);
app.use('/api/v1/meals', mealsRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
