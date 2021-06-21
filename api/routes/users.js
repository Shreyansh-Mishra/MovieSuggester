var express = require('express');
var router = express.Router();
var genreData = require("../../data/data.json")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(genreData);
});

module.exports = router;
