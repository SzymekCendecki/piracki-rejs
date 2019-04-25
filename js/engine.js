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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page8 = __webpack_require__(1);

module.exports.start = function () {
    $("#start").on("click", function () {
        $.ajax({
            url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {
            $("#equip").remove();

            $("#pages > p").hide();
            $("#btns > button").hide();

            $("#page1").show().append(data.game[0].page1);
            $("#toPage8").show();

            $("#toPage8").on("click", function () {
                $("#pages > p").hide();
                $("#btns > button").hide();
                $("#page8").show().append(data.game[0].page8);
                $("#toPage7, #toPage12").show();
                page8.page8();
            });
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page7 = __webpack_require__(7);
module.exports.page8 = function () {

  $("#toPage7").on("click", function () {
    page7.page7();
  });

  $("#toPage12").on("click", function () {
    console.log("kapitan");
  });
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import { equip } from "./game.js";
var intro = __webpack_require__(4);
var info = __webpack_require__(5);
var rulez = __webpack_require__(6);
var start = __webpack_require__(0);

document.addEventListener("DOMContentLoaded", function () {

  $("#title, #subTitle, #warning, #task, #vehicleActive, #rulez, #equip, #page1, #page7, #page8").hide();
  $("#toPage1, #toPage4, #toPage7, #toPage8, #toPage11, #toPage12, #toPage14, #toPage15, #toPage20, #toPage23, #toPage24, #toPage28, #toPage32, #toPage33, #toPage36, #toPage40, #toPage42, #toPage44,#toPage47,#toPage50, #toPage52, #toPage54, #toPage57, #toPage63, #toPage66, #toPage70, #toPage72, #toPage77, #toPage78, #toPage80, #toPage82, #toPage87, #toPage90, #toPage91, #toPage96, #toPage100, #toPage103, #toPage106, #toPage107, #toPage110, #toPage112, #toPage115, #toPage116, #toPage121, #toPage123, #taskDone").hide();

  intro.intro();
  info.info();
  rulez.rulez();
  start.start();
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.intro = function () {
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
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.info = function () {
    //info
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
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var start = __webpack_require__(0);

module.exports.rulez = function () {
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

                    start.start();
                }).fail(function () {
                    console.log("coś nie bangla...");
                });
            });
        }).fail(function () {
            console.log("coś nie bangla...");
        });
    });
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page1 = __webpack_require__(8);
module.exports.page7 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#pages > p").hide();
      $("#page7").show().append(data.game[0].page7);
      $("#btns > button").hide();
      $("#toPage1").show();
   }).fail(function () {
      console.log("coś nie bangla...");
   });

   page1.page1();
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page8 = __webpack_require__(1);
module.exports.page1 = function () {
   $("#toPage1").on("click", function () {
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page1").show();
      $("#toPage8").show();
      page8.page8();
   });
};

/***/ })
/******/ ]);