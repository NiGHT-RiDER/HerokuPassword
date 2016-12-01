/*
 * -----------------------------
 * -- LIBRAIRIES
 * -----------------------------
 */
var mongo = require('mongodb');
var monk = require('monk');
var db = monk(process.env.MONGOLAB_URI);
var pass = db.get('passwords');
var users = db.get('users');

/*
 * -------------
 * -- METHODES 
 * -------------
 */


/*
 * -----------
 * -- EXPORTS
 * -----------
 */
exports.db = db;
exports.pass = pass;
exports.users = users;
