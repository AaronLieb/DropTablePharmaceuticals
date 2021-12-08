"use strict";
exports.__esModule = true;
var getTimeStamp = function () {
    return new Date().toISOString();
};
var info = function (namespace, message, object) {
    if (object) {
        console.log("[" + getTimeStamp() + "] [INFO] [" + namespace + "] " + message, object);
    }
    else {
        console.log("[" + getTimeStamp() + "] [INFO] [" + namespace + "] " + message);
    }
};
var warn = function (namespace, message, object) {
    if (object) {
        console.warn("[" + getTimeStamp() + "] [WARN] [" + namespace + "] " + message, object);
    }
    else {
        console.warn("[" + getTimeStamp() + "] [WARN] [" + namespace + "] " + message);
    }
};
var debug = function (namespace, message, object) {
    if (object) {
        console.debug("[" + getTimeStamp() + "] [DEBUG] [" + namespace + "] " + message, object);
    }
    else {
        console.debug("[" + getTimeStamp() + "] [DEBUG] [" + namespace + "] " + message);
    }
};
var error = function (namespace, message, object) {
    if (object) {
        console.error("[" + getTimeStamp() + "] [ERROR] [" + namespace + "] " + message, object);
    }
    else {
        console.error("[" + getTimeStamp() + "] [ERROR] [" + namespace + "] " + message);
    }
};
exports["default"] = {
    info: info,
    warn: warn,
    error: error,
    debug: debug
};
