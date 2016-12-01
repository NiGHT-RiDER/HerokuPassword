/*
 * -----------------------------
 * -- LIBRAIRIES
 * -----------------------------
 */
var mongo = require('mongodb');
var monk = require('monk');
var db = monk(process.env.MONGOLAB_URI);
var pas = db.get('passwords');
var user = db.get('users');

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
exports.pass = pas;
exports.users = user;
