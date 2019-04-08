/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import { equip } from "./game.js";

document.addEventListener("DOMContentLoaded", function () {
    //intro
    $.ajax({
        url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
        type: 'GET',
        dataType: 'json'
    }).done(function (data) {
        $("#info").empty().append(data.intro[0].info);
    }).fail(function () {
        console.log("coś nie bangla...");
    });

    $("#title, #subTitle, #warning, #task, #vehicleActive, #rulez, #equip, #page1, #page8").hide();
    $("#info").on("click", function () {
        $("#info").remove();
        $("#title, #subTitle").show();
    });

    $("#title, #subTitle").on("click", function () {
        $("#title, #subTitle").remove();
        $("#warning").show();

        $.ajax({
            url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            $("#warning").empty().append(data.intro[0].warning);
            $("#warning").on("click", function () {
                $("#warning").remove();
                $("#task").show();
                $.ajax({
                    url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
                    type: 'GET',
                    dataType: 'json'
                }).done(function (data) {
                    $("#task").empty().append(data.intro[0].task);
                    $(".start").on("click", function () {
                        $("#task").remove();
                        $("#vehicleActive").show();
                    });
                }).fail(function () {
                    console.log("coś nie bangla...");
                });
            });
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });

    $(".one").on("click", function () {
        $("#vehicleActive").remove();
        $.ajax({
            url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            $("#rulez").show().empty().append(data.intro[0].rulez);
            $("#equip").addClass("one").on("click", function () {
                $("#rulez").remove();
                $("#equip").show();
                $.ajax({
                    url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
                    type: 'GET',
                    dataType: 'json'
                }).done(function (data) {
                    $("#equip").append(data.intro[0].equip);
                    $("#dataBase").on("click", function () {
                        $.ajax({
                            url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
                            type: 'GET',
                            dataType: 'json'
                        }).done(function (data) {
                            $("#dataBaseText").empty().append(data.dataBank[0].info);
                            $("#dataBase").prop("display", true);
                        }).fail(function () {
                            console.log("coś nie bangla...");
                        });
                    });

                    $("#start").on("click", function () {
                        $.ajax({
                            url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
                            type: 'GET',
                            dataType: 'json'
                        }).done(function (data) {
                            $("#equip").remove();
                            $("#page1").show().append(data.game[0].page1);
                            $("#page1 > button").on("click", function () {
                                $("#page1").hide();
                                $("#page8").show();
                                //.append(data.game[0].page8);
                            });
                        }).fail(function () {
                            console.log("coś nie bangla...");
                        });
                    });
                }).fail(function () {
                    console.log("coś nie bangla...");
                });
            });
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });
});

/***/ })
/******/ ]);