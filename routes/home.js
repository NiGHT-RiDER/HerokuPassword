var pass = require('../helpers/database.js').pass;
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
