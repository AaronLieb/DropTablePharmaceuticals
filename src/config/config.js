"use strict";
var _a, _b;
exports.__esModule = true;
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
var MYSQL_PORT = parseInt((_b = (_a = process.env.MYSQL_PORT) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '3306');
var MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'docoffice';
var MYSQL_USER = process.env.MYSQL_USER || 'root';
var MYSQL_PASS = process.env.MYSQL_PASS || 'yeet';
var MYSQL = {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASS
};
var SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
var SERVER_PORT = process.env.SERVER_PORT || 1337;
var SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
var config = {
    mysql: MYSQL,
    server: SERVER
};
exports["default"] = config;
