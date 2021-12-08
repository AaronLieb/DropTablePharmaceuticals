"use strict";
var express_1 = require("express");
var auth_1 = require("../controllers/auth");
var router = express_1["default"].Router();
router.post('/signup', auth_1["default"].signup);
router.post('/login', auth_1["default"].login);
module.exports = router;
