"use strict";
var express_1 = require("express");
var prescription_1 = require("../controllers/prescription");
var router = express_1["default"].Router();
router.get('/', prescription_1["default"].getAll);
router.get('/id', prescription_1["default"].getPrescription);
router.post('/', prescription_1["default"].postPrescription);
router.put('/', prescription_1["default"].updatePrescription);
module.exports = router;
