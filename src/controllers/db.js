"use strict";
exports.__esModule = true;
var config_1 = require("../config/config");
var mysql_1 = require("mysql");
var db = mysql_1["default"].createConnection(config_1["default"].mysql);
db.connect(function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('MySQL connected!');
    }
});
exports["default"] = {
    db: db
};
