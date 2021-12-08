"use strict";
var express_1 = require("express");
var patient_1 = require("../controllers/patient");
var router = express_1["default"].Router();
router.get('/', patient_1["default"].getAll);
router.get('/id', patient_1["default"].getPatient);
router.post('/', patient_1["default"].postPatient);
module.exports = router;
