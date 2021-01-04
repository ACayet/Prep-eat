var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var port;
  if (req.app.get('trust proxy') == true){
    port = "";
  }else{
    port =":" + req.app.get('port')
  }
  var URL = req.protocol + "://" + req.hostname + port + "/api/v1/docs"

  res.render('index', { title: 'Prep-eat', docURL: URL});
});

module.exports = router;
