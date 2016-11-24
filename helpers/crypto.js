/*
 * -----------------------------
 * -- definition des librairies
 * -- et des variables 
 * -----------------------------
 */
var crypto = require('crypto');
var length = 256;  
var length_salt = 64;  
var nbIterations = 10000;  
var algo = 'sha256';

/*
 * -------------
 * -- METHODES 
 * -------------
 */

/*
 * -------------------------------------------------------
 * -- cree un hash base sur un salt d'un password donne
 * -- si il n'y a pas de salt alors un nouveau sera genere
 * -------------------------------------------------------
 *
 * @param  password
 * @param  salt - optionel 
 * @param  fonction callback
 */
function hashPassword(password, salt, callback) {  
    var len = length / 2;

    if (3 === arguments.length) {
        crypto.pbkdf2(password, salt, nbIterations, len, algo, function(err, derivedKey) {
            if (err) {
                return callback(err);
            }
            return callback(null, derivedKey.toString('hex'));
        });
    } else {
        callback = salt;
        crypto.randomBytes(length_salt / 2, function(err, salt) {
            if (err) {
                return callback(err);
            }
            salt = salt.toString('hex');
            crypto.pbkdf2(password, salt, nbIterations, len, algo, function(err, derivedKey) {
                if (err) {
                    return callback(err);
                }
                callback(null, derivedKey.toString('hex'), salt);
            });
        });
    }
}

/*
 * -------------------------------------------------------
 * -- verifie si le password correspond au hash en hashant le password
 * -- avec le sel donné 
 * -------------------------------------------------------
 *
 * @param  password
 * @param  salt - optionel 
 * @param  fonction callback
 */
function verify(password, hash, salt, callback) {
  hashPassword(password, salt, function(err, hashedPassword) {
    if (err) {
      return callback(err);
    }

    if (hashedPassword === hash) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  });
}


/*
 * -----------
 * -- EXPORTS
 * -----------
 */
exports.verify = verify;
exports.hash   = hashPassword;

