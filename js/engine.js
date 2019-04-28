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
var page12 = __webpack_require__(9);
module.exports.page8 = function () {

  $("#toPage7").on("click", function () {
    page7.page7();
  });

  $("#toPage12").on("click", function () {
    page12.page12();
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

  $("#title, #subTitle, #warning, #task, #vehicleActive, #rulez, #equip, #page1, #page7, #page8, #page11, #page12, #page14, #page15, #page20, #page23, #page24, #page28, #page32, #page33, #page36, #page40, #page42, #page44, #page47, #page50, #page52, #page54, #page57, #page63, #page66, #page70, #page72, #page77, #page78, #page80, #page82, #page87, #page90, #page91, #page96, #page100, #page103, #page106,  #page107, #page110,#page112, #page115, #page116, #page121, #page123").hide();
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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page11 = __webpack_require__(10);
module.exports.page12 = function () {
   $("#toPage12").on("click", function () {
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page12").show();
      $("#toPage11").show();
      page11.page11();
   });
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page20 = __webpack_require__(11);
module.exports.page11 = function () {
   $("#toPage11").on("click", function () {
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page11").show();
      $("#toPage20").show();
      page20.page20();
   });
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page4 = __webpack_require__(13);
var page15 = __webpack_require__(12);
module.exports.page20 = function () {

   $("#toPage20").on("click", function () {
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page20").show();
      $("#toPage4, #toPage15").show();
      page4.page4();
      page15.page15();
   });
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page33 = __webpack_require__(14);
var page24 = __webpack_require__(15);
module.exports.page15 = function () {

   $("#toPage15").on("click", function () {
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page15").show();
      $("#toPage33, #toPage24").show();
      page33.page33();
      page24.page24();
   });
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page14 = __webpack_require__(1);
module.exports.page4 = function () {
   $("#toPage4").on("click", function () {
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page4").show();
      $("#toPage14").show();
      page14.page14();
   });
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page20 = __webpack_require__(11);
module.exports.page33 = function () {
   $("#toPage33").on("click", function () {
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page33").show();
      $("#toPage20").show();
      page20.page20();
   });
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page14 = __webpack_require__(16);
module.exports.page24 = function () {
   $("#toPage24").on("click", function () {
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page24").show();
      $("#toPage14").show();
      page14.page14();
   });
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page23 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./page23.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var page28 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./page28.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
module.exports.page14 = function () {

   $("#toPage14").on("click", function () {
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page14").show();
      $("#toPage23, #toPage28").show();
      page23.page23();
      page28.page28();
   });
};

/***/ })
/******/ ]);