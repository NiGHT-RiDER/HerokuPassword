var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://trump:trumpisawesome@ds163397/mlab.com:63397/passwords');
var users = db.get('users');
var crypto = require('../helpers/crypto.js');
var express = require('express');
var router = express.Router();

router.post('/',function(req,res,next){
    var username = req.body.email;
    var password = req.body.pass;
    var authenticated = false;
    users.findOne({username : username}).then((usr) =>{
        if(usr != null){
            crypto.verify(password , usr.hash, usr.salt , function(err , val){
                if(val===true){
                    req.session.username = username;
                    res.redirect('home');
                } else {
                    res.render('login' , {title:"Express" , message:"pas log!"});

                }
            });
        } else {
            res.render('login' , {title:"Express" , message:"pas log!"});
        }

    });


});

router.get('/',function(req,res,next){
    res.render('login', {title:"Express"});
});

module.exports = router;
