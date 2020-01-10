const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorhandler = require("errorhandler");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (!isProduction) {
  app.use(errorhandler());
}

if(isProduction){
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://0.0.0.0/login-app');
  mongoose.set('debug', true);
}

require('./models/User');
require('./config/passport');

app.get('/ping', (_, res) => {
  return res.send('pong');
});

app.use('/', require('./routes'));

if (true) {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function(err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({'errors': {
      message: err.message,
      error: err
    }});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

const server = app.listen( process.env.PORT || 5000, '0.0.0.0', function(){
  console.log('Listening on port ' + server.address().port);
});