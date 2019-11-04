var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("ecommerce-users", {title : "Quản lý tài khoản khách hàng"})
});


module.exports = router;
