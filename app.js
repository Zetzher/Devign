require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

////////// No se si hace falta porque el debug no se usa
const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const randomRouter = require('./routes/random');
const privCardsRouter = require('./routes/private/cards');
const privProjectsRouter = require('./routes/private/projects');
const privUserRouter = require('./routes/private/user');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// inicio de sesion
// secret: Used to sign the session ID cookie (required)
// cookie: Object for the session ID cookie. In this case, we only set the maxAge attribute, which configures the expiration date of the cookie (in milliseconds).
// store: Sets the session store instance. In this case, we create a new instance of connect-mongo, so we can store the session information in our Mongo database.
app.use(session({
  secret: "basic-auth-secret",
  cookie: {
    maxAge: 6000000
  },
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  })
}));

app.use((req, res, next) => {
  if (req.session.currentUser) {
    let user = req.session.currentUser;
    
    res.locals.userInfo = user;
   // console.log(res.locals.userInfo);
    res.locals.isUserLogged = true;
  } else {
    res.locals.isUserNotLogged = true;
  }
  next()
})

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/random', randomRouter);
app.use('/private/cards', privCardsRouter);
app.use('/private/projects', privProjectsRouter);
app.use('/private/user', privUserRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;