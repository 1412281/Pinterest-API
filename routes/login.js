var express = require('express');
var pinterest = require('../util/pinterest');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login/login', pinterest.login(callback) );
});

module.exports = router;
