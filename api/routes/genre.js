var express = require('express');
var router = express.Router();
var genreData = require("../../data/data.json")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json(genreData);
});

module.exports = router;
