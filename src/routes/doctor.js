"use strict";
var express_1 = require("express");
var doctor_1 = require("../controllers/doctor");
var router = express_1["default"].Router();
router.get('/', doctor_1["default"].getAll);
router.get('/patient', doctor_1["default"].getPatientDoctor);
router.post('/', doctor_1["default"].postDoctor);
module.exports = router;
