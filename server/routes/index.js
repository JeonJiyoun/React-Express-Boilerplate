var express = require('express');
var router = express.Router();
const connection = require('../config/db.js');
const userRouter = require('./users');

router.use('/users', userRouter);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
