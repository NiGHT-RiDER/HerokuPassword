var mongo = require('mongodb');
var monk = require('monk');
var db = monk("mongodb://aa:aaaa@ds163397.mlab.com:63397/passwords");
var users = db.get('passwords');
var crypto = require('../helpers/crypto.js');
var express = require('express');
var router = express.Router();

/*respond to get and post*/
router.post('/' , function(req,res,next){
    var username = req.session.username;
    var passname = req.body.passname;
    var password = req.body.password;
    var category= req.body.category;
    var title = req.body.title;
    var url = req.body.url ;
    // hash and salt password 
    users.insert({
        username : username ,
        password: password ,
        passname : passname ,
        category : category,
        title : title , 
        url : url
    },function(err,doc){
        if(err) return done(err);
        res.redirect('home');
    }); 
});


/* GET */
router.get('/', function(req, res, next) {
    res.render('insert');
});
module.exports = router;
