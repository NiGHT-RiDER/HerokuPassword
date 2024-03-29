var users = require('../helpers/database.js').pass;
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
