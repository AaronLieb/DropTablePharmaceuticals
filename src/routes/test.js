"use strict";
var express_1 = require("express");
var test_1 = require("../controllers/test");
var router = express_1["default"].Router();
router.get('/', test_1["default"].getAll);
router.get('/id', test_1["default"].getTest);
router.post('/', test_1["default"].postTest);
router.put('/', test_1["default"].updateTest);
module.exports = router;
