"use strict";
exports.__esModule = true;
var logging_1 = require("../config/logging");
var db_1 = require("./db");
var NAMESPACE = 'Test Controller';
// req : {}
// res : { result: DataRowPackets }
var getAll = function (req, res) {
    logging_1["default"].info(NAMESPACE, "getAll endpoint called.");
    db_1["default"].db.query('SELECT * FROM test', function (error, result) {
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
var getTest = function (req, res) {
    logging_1["default"].info(NAMESPACE, "getTest called.");
    db_1["default"].db.query('SELECT * FROM test WHERE testId = ?', [req.body['id']], function (error, result) {
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
var postTest = function (req, res) {
    logging_1["default"].info(NAMESPACE, "postTest called.");
    var _a = req.body, ssn = _a.ssn, firstName = _a.firstName, lastName = _a.lastName, phone = _a.phone, streetName = _a.streetName, streetNumber = _a.streetNumber, city = _a.city, zip = _a.zip, insurance = _a.insurance;
    db_1["default"].db.query('INSERT INTO test VALUES ?', [ssn, firstName, lastName, phone, streetName, streetNumber, city, zip, insurance], function (error, result) {
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
var updateTest = function (req, res) {
    logging_1["default"].info(NAMESPACE, "updateTest endpoint called.");
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
    getTest: getTest,
    postTest: postTest,
    updateTest: updateTest
};
