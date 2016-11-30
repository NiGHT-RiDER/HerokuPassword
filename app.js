/* -----------------------
 * -- PROJET WEB
 * -----------------------
 * 
 *  gestionnaire de mots de passe 
 *
 * -----------------------
 * -- MEMBRE DE L'EQUIPE
 * -----------------------
 *  BOGDANOVIC Stefan
 *  PIRARD Delanoe
 *  DI VITO Dylan
 *  DELHAYE Gabriel
 *  SHEVTCHENKO Philip
 *
 */

/* --------------------------------
 * -- REQUIRE POUR LES LIBRAIRIES
 * --------------------------------
 */
var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

/*
 * --------------------------------
 * -- VIEW ENGINE SETUP 
 * --------------------------------
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(session({resave: true, saveUninitialized: true, secret: 'SOSECRETMUCHRANDOM', cookie: { maxAge: 60000 }}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
 * --------------------------------
 * -- GERE LES ROUTES
 * --------------------------------
 */
 
var update = require('./routes/update');
var insert = require('./routes/insert');
var index  = require('./routes/index');
var logout = require('./routes/logout');
var remove = require('./routes/delete');
var home   = require('./routes/home');
var login  = require('./routes/login');
var signup = require('./routes/signup');

       
function isLogged(req, res, next) {
    if (req.session.username)
        res.render('home', {title : "Express"});
    else
        return next();
}
         
function isNotLogged(req, res, next) {
    if (req.session.username)
        return next();
    else
        res.render('login' , {title : "Express"});
}
        
app.use('/login', isLogged, login);
app.use('/logout', logout);
app.use('/signup', isLogged, signup);
app.use('/update', isNotLogged, update);
app.use('/delete', isNotLogged, remove);
app.use('/insert', isNotLogged, insert);
app.use('/home', isNotLogged, home);
app.use('/', index);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

/*
 * --------------------------------
 * -- EXPORTS  
 * --------------------------------
 */
module.exports = app;
