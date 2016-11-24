var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://localhost:27017/test');
var pass = db.get('passwords');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    pass.findOneAndDelete({id : req.param.id },function(err,docs){
        res.redirect("/home");
    });
});

module.exports = router;
