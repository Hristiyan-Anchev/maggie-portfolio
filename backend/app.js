require("dotenv").config({path:`${__dirname}/.env`});
console.log(__dirname);
require("./config/mongoose-config")();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var cmsRouter = require("./routes/cms");


const cors = require("cors");
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use("/",express.static(path.join(__dirname, 'public')));
app.use("/",express.static(path.join(__dirname, 'public/build')));

app.use('/api', indexRouter);
app.use("/cms",cmsRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {

  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.redirect("/");
  // if route not found in the index.js router server will respond with the SPA (index.html)
  res.sendFile(path.join(__dirname, '/public/build', 'index.html'));
});


module.exports = app;
