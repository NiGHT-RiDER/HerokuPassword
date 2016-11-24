var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://localhost:27017/test');
var pass = db.get('passwords');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    pass.find({},function(err,docs){
        res.render('home' , {docs:docs});
    });
});

module.exports = router;
