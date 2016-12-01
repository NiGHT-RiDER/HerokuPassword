var pass = require('../helpers/database.js').pass;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    pass.findOne({id : req.param.id },function(err,doc){
        res.render("update" , {doc : doc});
    });
});

router.post('/:id', function(req, res, next) {
    pass.findOneAndUpdate(
        {
            id : req.param.id 
        },
        {
            title:req.body.title,
            url : req.body.url,
            username : req.session.username,
            passname : req.body.passname,
            password : req.body.password,
            category : req.body.category
        }
    );
    res.redirect('/home');
});
module.exports = router;
