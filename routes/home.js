var mongo = require('mongodb');
var monk = require('monk');
var db = monk(process.env.MONGOLAB_URI);
var pass = db.get('passwords');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var username = req.session.username;
    pass.find({username : req.session.username },function(err,docs){
        res.render('home' , {docs:docs});
    });
});

module.exports = router;
