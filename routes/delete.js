var mongo = require('mongodb');
var monk = require('monk');
var db = monk("mongodb://aa:aaaa@ds163397.mlab.com:63397/passwords");
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
