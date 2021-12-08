"use strict";
exports.__esModule = true;
var logging_1 = require("../config/logging");
var db_1 = require("./db");
var NAMESPACE = 'Appointment Controller';
// req : { id: int }
// res : { result: DataRowPackets }
var getByPatient = function (req, res) {
    logging_1["default"].info(NAMESPACE, "GetByPatient endpoint called.");
    db_1["default"].db.query('SELECT * FROM appointment WHERE patientId = ?', [req.body['id']], function (error, result) {
        if (error) {
            logging_1["default"].error(NAMESPACE, 'Could not perform query', error);
            res.status(400).json(error);
        }
        else {
            return res.status(200).json({
                result: result
            });
        }
    });
};
// req : { id: int }
// res : { result }
var getByDoctor = function (req, res) {
    logging_1["default"].info(NAMESPACE, "getPatientDoctor called.");
    db_1["default"].db.query('SELECT * FROM appointment WHERE doctorId = ?', [req.body['id']], function (error, result) {
        if (error) {
            logging_1["default"].error(NAMESPACE, 'Could not perform query', error);
            res.status(400).json(error);
        }
        else {
            return res.status(200).json({
                result: result
            });
        }
    });
};
var postAppointment = function (req, res) {
    logging_1["default"].info(NAMESPACE, "postDoctor called.");
    var _a = req.body, test = _a.test, patientId = _a.patientId, doctorId = _a.doctorId, time = _a.time, date = _a.date, room = _a.room;
    db_1["default"].db.query('INSERT INTO appointment VALUES ?', [test, patientId, doctorId, time, date, room], function (error, result) {
        if (error) {
            logging_1["default"].error(NAMESPACE, 'Could not perform query', error);
            res.status(400).json(error);
        }
        else {
            return res.status(200).json({
                result: result
            });
        }
    });
};
var updateAppointment = function (req, res) {
    logging_1["default"].info(NAMESPACE, "updateAppointment endpoint called.");
    db_1["default"].db.query('REPLACE', [req.body['id']], function (error, result) {
        if (error) {
            logging_1["default"].error(NAMESPACE, 'Could not perform query', error);
            res.status(400).json(error);
        }
        else {
            return res.status(200).json({
                result: result
            });
        }
    });
};
exports["default"] = {
    getByPatient: getByPatient,
    getByDoctor: getByDoctor,
    postAppointment: postAppointment,
    updateAppointment: updateAppointment
};
