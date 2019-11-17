var express = require('express');
var router = express.Router();
var data = require("../data/data.json");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'People List',
    data: data
   });
});

module.exports = router;
