var mongo = require("mongodb");
var monk = require("monk");
var db = monk(process.env.MONGOLAB_URI);
var users = db.get("users");
var crypto = require("../helpers/crypto.js");
var express = require("express");
var router = express.Router();

function createUser(username , password , passconf , callback){
    /* store hash and salt when inserting ! */
    if(password !== passconf){
        var err = 'the given passwords dont match';
        callback(err);
    }
    crypto.hash(password , function(err , hash , salt){
        if(err){
            callback(err);
        }
        users.count({username : username}, function(err, count){
            if(err)
                return callback(err);
            if(count !== 0)
                return callback("username deja utilise");
            var userhash = hash;
            var usersalt = salt;
            users.insert({username : username , hash : userhash , salt : usersalt} , function(err, doc){
                if(err) 
                    return done(err);
                callback(err , doc);
                done();
            }).then(
                function(){
                    req.session.username = username;
                }
            ).catch(function(){console.log()});
        });

    })
}

/*respond to get and post*/
router.post('/' , function(req,res,next){
    var username = req.body.username;
    var password = req.body.password;
    var passconf = req.body.passwordconfirm;
    createUser(username , password , passconf , function(err,user){
        res.redirect('home');
    });
});

router.get('/', function(req, res, next) {
    res.render('login', { title: "Express"});
});

module.exports = router;
