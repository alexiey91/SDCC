var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('home', { title: 'Express' );
//router.use('/views', express.static('./views'));
  res.sendfile('views/client.html');

});

module.exports = router;
