var pass = require('../helpers/database.js').pass;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    pass.findOneAndDelete({id : req.param.id },function(err,docs){
        res.redirect("/home");
    });
});

module.exports = router;
