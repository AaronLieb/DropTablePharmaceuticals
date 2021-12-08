"use strict";
exports.__esModule = true;
var logging_1 = require("../config/logging");
var db_1 = require("./db");
var NAMESPACE = 'Prescription Controller';
// req : {}
// res : { result: DataRowPackets }
var getAll = function (req, res) {
    logging_1["default"].info(NAMESPACE, "getAll endpoint called.");
    db_1["default"].db.query('SELECT * FROM prescription', function (error, result) {
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
var getPrescription = function (req, res) {
    logging_1["default"].info(NAMESPACE, "getPrescription endpoint called.");
    db_1["default"].db.query('SELECT * FROM prescription WHERE Prescription_SSN = ?', [req.body['id']], function (error, result) {
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
var postPrescription = function (req, res) {
    logging_1["default"].info(NAMESPACE, "postDoctor called.");
    var _a = req.body, name = _a.name, dosage = _a.dosage, refills = _a.refills, datePrescribed = _a.datePrescribed, recentFilling = _a.recentFilling, doctorId = _a.doctorId, patientId = _a.patientId;
    db_1["default"].db.query('INSERT INTO prescription VALUES ?', [name, dosage, refills, datePrescribed, recentFilling, doctorId, patientId], function (error, result) {
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
var updatePrescription = function (req, res) {
    logging_1["default"].info(NAMESPACE, "updatePrescription endpoint called.");
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
    getAll: getAll,
    getPrescription: getPrescription,
    postPrescription: postPrescription,
    updatePrescription: updatePrescription
};
