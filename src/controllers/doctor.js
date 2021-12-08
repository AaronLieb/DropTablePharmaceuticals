"use strict";
exports.__esModule = true;
var logging_1 = require("../config/logging");
var db_1 = require("./db");
var NAMESPACE = 'Doctor Controller';
// req : {}
// res : { result }
var getAll = function (req, res) {
    logging_1["default"].info(NAMESPACE, "Doctor endpoint called.");
    db_1["default"].db.query('SELECT * FROM doctor', function (error, result) {
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
var getPatientDoctor = function (req, res) {
    logging_1["default"].info(NAMESPACE, "getPatientDoctor called.");
    db_1["default"].db.query('SELECT * FROM doctor ...', [req.body['id']], function (error, result) {
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
var postDoctor = function (req, res) {
    logging_1["default"].info(NAMESPACE, "postDoctor called.");
    var _a = req.body, firstName = _a.firstName, lastName = _a.lastName, phone = _a.phone, specialty = _a.specialty, salary = _a.salary;
    db_1["default"].db.query('INSERT INTO doctor VALUES ?', [firstName, lastName, phone, specialty, salary], function (error, result) {
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
var updateDoctor = function (req, res) {
    logging_1["default"].info(NAMESPACE, "updateDoctor endpoint called.");
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
    getPatientDoctor: getPatientDoctor,
    postDoctor: postDoctor,
    updateDoctor: updateDoctor
};
