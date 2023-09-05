const cors = require('cors'); // add at the top

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var veggiesRouter = require('./routes/veggies'); //changed
// var usersRouter = require('./routes/users');
var fruitsRouter = require('./routes/fruits'); //added

var app = express();
app.use(cors()); // add after 'app' is created

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.get("/", function(req, res, next) {
//     res.send("Access the API at path /api");
//   });

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/veggies', veggiesRouter); //added
app.use('/fruits', fruitsRouter); //added

module.exports = app;
