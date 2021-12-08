"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var logging_1 = require("../config/logging");
var db_1 = require("../controllers/db");
var bcrypt_1 = require("bcrypt");
var NAMESPACE = 'Auth Controller';
// req : { username: string, password: string, passwordConfirm: string }
// success res : { message: string }, status 200
// failure res : { message: string }, status 400
var signup = function (req, res) {
    logging_1["default"].info(NAMESPACE, 'Attempted signup');
    var _a = req.body, username = _a.username, role = _a.role, password = _a.password, passwordConfirm = _a.passwordConfirm;
    db_1["default"].db.query('SELECT username FROM account WHERE username = ?', [username], function (error, result) { return __awaiter(void 0, void 0, void 0, function () {
        var salt, hashedPassword;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (error) {
                        logging_1["default"].error(NAMESPACE, 'Could not query username', error);
                    }
                    if (result > 0) {
                        logging_1["default"].info(NAMESPACE, 'Username already in use');
                        return [2 /*return*/, res.status(400).json({
                                message: 'Username already in use'
                            })];
                    }
                    else if (password !== passwordConfirm) {
                        logging_1["default"].info(NAMESPACE, 'Passwords do not match');
                        return [2 /*return*/, res.status(400).json({
                                message: 'Passwords do not match'
                            })];
                    }
                    salt = bcrypt_1["default"].genSaltSync();
                    return [4 /*yield*/, bcrypt_1["default"].hash(password, salt)];
                case 1:
                    hashedPassword = _a.sent();
                    db_1["default"].db.query('INSERT INTO account VALUES ?', [username, role, hashedPassword, salt], function (error, result) {
                        if (error) {
                            logging_1["default"].info(NAMESPACE, 'Error inserting user into db', error);
                        }
                        else {
                            logging_1["default"].info(NAMESPACE, 'Sign up endpoint hit', result);
                            return res.status(200).json({
                                message: 'User account created!',
                                result: result
                            });
                        }
                    });
                    return [2 /*return*/];
            }
        });
    }); });
};
// req : { username: string, password: string }
// success res : { message: string }, status 200
// failure res : { message: string }, status 400
var login = function (req, res) {
    logging_1["default"].info(NAMESPACE, 'Attempted login');
    try {
        var _a = req.body, username = _a.username, password_1 = _a.password;
        if (!username || !password_1) {
            return res.status(400).json({
                message: 'Please provide an username or password'
            });
        }
        db_1["default"].db.query('SELECT * FROM account WHERE username = ?', [username], function (error, result) { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = !result;
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, bcrypt_1["default"].compare(password_1, result[0].password)];
                    case 1:
                        _a = !(_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a) {
                            res.status(400).json({
                                message: 'Username or password is incorrect'
                            });
                        }
                        else {
                            res.status(200).json({
                                message: 'Successfully logged in'
                            });
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    }
    catch (error) {
        logging_1["default"].error(NAMESPACE, 'Error during login', error);
    }
};
exports["default"] = {
    signup: signup,
    login: login
};
