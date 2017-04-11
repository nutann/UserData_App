var express = require('express');
var router = express.Router();
var parser = require('ua-parser-js');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("get called");
    // get user-agent header
    var ua = parser(req.headers['user-agent']);
    // write the result as response
    res.send(JSON.stringify(ua, null, '  '));
});

module.exports = router;
