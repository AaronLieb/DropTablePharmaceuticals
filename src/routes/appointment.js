"use strict";
var express_1 = require("express");
var appointment_1 = require("../controllers/appointment");
var router = express_1["default"].Router();
router.get('/patient', appointment_1["default"].getByPatient);
router.get('/doctor', appointment_1["default"].getByDoctor);
router.post('/', appointment_1["default"].postAppointment);
module.exports = router;
