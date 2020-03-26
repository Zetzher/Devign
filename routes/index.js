var express = require('express');
var router = express.Router();


// Home page (GET)
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Devign' });
});

module.exports = router;