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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page7 = __webpack_require__(8);
var page12 = __webpack_require__(10);
module.exports.page8 = function () {

  $("#toPage7").on("click", function () {
    page7.page7();
  });

  $("#toPage12").on("click", function () {
    page12.page12();
  });
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page8 = __webpack_require__(0);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page4 = __webpack_require__(12);
var page15 = __webpack_require__(13);
module.exports.page20 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage20").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page20").show().empty().append(data.game[0].page20);
         $("#toPage4, #toPage15").show();
         page4.page4();
         page15.page15();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import { equip } from "./game.js";
var intro = __webpack_require__(5);
var info = __webpack_require__(6);
var rulez = __webpack_require__(7);
var start = __webpack_require__(1);

document.addEventListener("DOMContentLoaded", function () {

  $("#title, #subTitle, #warning, #task, #vehicleActive, #rulez, #equip, #page1, #page7, #page8, #page11, #page12, #page14, #page15, #page20, #page23, #page24, #page28, #page32, #page33, #page36, #page40, #page42, #page44, #page47, #page50, #page52, #page54, #page57, #page63, #page66, #page70, #page72, #page77, #page78, #page80, #page82, #page87, #page90, #page91, #page96, #page100, #page103, #page106,  #page107, #page110,#page112, #page115, #page116, #page121, #page123").hide();
  $("#toPage1, #toPage4, #toPage7, #toPage8, #toPage11, #toPage12, #toPage14, #toPage15, #toPage20, #toPage23, #toPage24, #toPage28, #toPage32, #toPage33, #toPage36, #toPage40, #toPage42, #toPage44,#toPage47,#toPage50, #toPage52, #toPage54, #toPage57, #toPage63, #toPage66, #toPage70, #toPage72, #toPage77, #toPage78, #toPage80, #toPage82, #toPage87, #toPage90, #toPage91, #toPage96, #toPage100, #toPage103, #toPage106, #toPage107, #toPage110, #toPage112, #toPage115, #toPage116, #toPage121, #toPage123, #taskDone").hide();

  intro.intro();
  info.info();
  rulez.rulez();
  start.start();
});

/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var start = __webpack_require__(1);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page1 = __webpack_require__(9);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page8 = __webpack_require__(0);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page11 = __webpack_require__(11);
module.exports.page12 = function () {
   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage12").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page12").show().empty().append(data.game[0].page12);
         $("#toPage11").show();
         page11.page11();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page20 = __webpack_require__(2);
module.exports.page11 = function () {
   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage11").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page11").show().empty().append(data.game[0].page11);
         $("#toPage20").show();
         page20.page20();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page14 = __webpack_require__(0);
module.exports.page4 = function () {
   $("#toPage4").on("click", function () {

      $.ajax({
         url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
         type: 'GET',
         dataType: 'json'
      }).done(function (data) {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page4").show().empty().append(data.game[0].page4);
         $("#toPage14").show();
         page14.page14();
      }).fail(function () {
         console.log("coś nie bangla...");
      });
   });
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page33 = __webpack_require__(14);
var page24 = __webpack_require__(15);
module.exports.page15 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage15").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page15").show().empty().append(data.game[0].page15);
         $("#toPage33, #toPage24").show();
         page33.page33();
         page24.page24();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page20 = __webpack_require__(2);
module.exports.page33 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage33").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page33").show().empty().append(data.game[0].page33);
         $("#toPage20").show();
         page20.page20();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page14 = __webpack_require__(16);
module.exports.page24 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage24").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page24").show().empty().append(data.game[0].page24);
         $("#toPage14").show();
         page14.page14();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page23 = __webpack_require__(17);
var page28 = __webpack_require__(18);
module.exports.page14 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage14").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page14").show().empty().append(data.game[0].page14);
         $("#toPage23, #toPage28").show();
         page23.page23();
         page28.page28();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page50 = __webpack_require__(23);
module.exports.page23 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage23").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page23").show().empty().append(data.game[0].page23);
         $("#toPage50").show();
         page50.page50();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page50 = __webpack_require__(23);
var page36 = __webpack_require__(19);
module.exports.page28 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage28").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page28").show().empty().append(data.game[0].page28);
         $("#toPage50, #toPage36").show();
         page50.page50();
         page36.page36();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page47 = __webpack_require__(20);
module.exports.page36 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage36").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page36").show().empty().append(data.game[0].page36);
         $("#toPage47").show();
         page47.page47();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page40 = __webpack_require__(21);
module.exports.page47 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage47").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page47").show().empty().append(data.game[0].page47);
         $("#toPage40").show();
         page40.page40();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page44 = __webpack_require__(22);
var page52 = __webpack_require__(24);
var page54 = __webpack_require__(26);
module.exports.page40 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage40").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page40").show().empty().append(data.game[0].page40);
         $("#toPage50, #toPage36").show();
         page44.page44();
         page52.page52();
         page54.page54();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page66 = __webpack_require__(29);
module.exports.page44 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage44").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page44").show().empty().append(data.game[0].page44);
         $("#toPage66").show();
         page66.page66();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page63 = __webpack_require__(28);
var page57 = __webpack_require__(27);
module.exports.page50 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage50").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page50").show().empty().append(data.game[0].page50);
         $("#toPage63, #toPage57").show();
         page63.page63();
         page57.page57();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page42 = __webpack_require__(25);
module.exports.page52 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage52").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page52").show().empty().append(data.game[0].page52);
         $("#toPage42").show();
         page42.page42();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page96 = __webpack_require__(34);
module.exports.page42 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage42").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page42").show().empty().append(data.game[0].page42);
         $("#toPage96").show();
         page96.page96();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page20 = __webpack_require__(34);
module.exports.page54 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage54").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page54").show().empty().append(data.game[0].page54);
         $("#toPage20").show();
         page20.page20();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page77 = __webpack_require__(30);
var page90 = __webpack_require__(32);
module.exports.page57 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage57").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page57").show().empty().append(data.game[0].page57);
         $("#toPage77, #toPage90").show();
         page77.page77();
         page90.page90();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page15 = __webpack_require__(13);
module.exports.page63 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage63").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page63").show().empty().append(data.game[0].page63);
         $("#toPage15").show();
         page15.page15();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page72 = __webpack_require__(23);
module.exports.page66 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage66").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page66").show().empty().append(data.game[0].page66);
         $("#toPage50, #toPage36").show();
         page72.page72();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page80 = __webpack_require__(31);

module.exports.page77 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage77").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page77").show().empty().append(data.game[0].page77);
         $("#toPage80").show();
         page80.page80();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page91 = __webpack_require__(33);

module.exports.page80 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage80").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page80").show().empty().append(data.game[0].page80);
         $("#toPage91").show();
         page91.page91();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page20 = __webpack_require__(2);

module.exports.page90 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage90").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page90").show().empty().append(data.game[0].page90);
         $("#toPage20").show();
         page20.page20();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page14 = __webpack_require__(16);

module.exports.page91 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage91").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page91").show().empty().append(data.game[0].page91);
         $("#toPage14").show();
         page14.page14();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page14 = __webpack_require__(16);
var page70 = __webpack_require__(35);
var page66 = __webpack_require__(29);
var page50 = __webpack_require__(23);
module.exports.page96 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage96").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page96").show().empty().append(data.game[0].page96);
         $("#toPage14, #toPage70, #toPage66, #toPage50").show();
         page14.page14();
         page70.page70();
         page66.page66();
         page50.page50();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page50 = __webpack_require__(23);
var page87 = __webpack_require__(36);
module.exports.page70 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage70").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page70").show().empty().append(data.game[0].page70);
         $("#toPage50, #toPage87").show();
         page50.page50();
         page87.page87();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page100 = __webpack_require__(37);
var page103 = __webpack_require__(39);
module.exports.page87 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage87").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page87").show().empty().append(data.game[0].page87);
         $("#toPage100, #toPage100").show();
         page100.page100();
         page103.page103();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page78 = __webpack_require__(38);
var page106 = __webpack_require__(40);
module.exports.page100 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage100").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page100").show().empty().append(data.game[0].page100);
         $("#toPage78, #toPage106").show();
         page78.page78();
         page106.page106();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page50 = __webpack_require__(23);

module.exports.page78 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage78").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page78").show().empty().append(data.game[0].page78);
         $("#toPage50").show();
         page50.page50();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page107 = __webpack_require__(41);
var page112 = __webpack_require__(43);
module.exports.page103 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage103").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page103").show().empty().append(data.game[0].page103);
         $("#toPage107, #toPage112").show();
         page107.page107();
         page112.page112();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page121 = __webpack_require__(42);

module.exports.page106 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage106").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page106").show().empty().append(data.game[0].page106);
         $("#toPage106").show();
         page121.page121();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page66 = __webpack_require__(29);

module.exports.page107 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage107").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page107").show().empty().append(data.game[0].page107);
         $("#toPage66").show();
         page66.page66();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page70 = __webpack_require__(35);
module.exports.page121 = function () {
   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage121").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page121").show().empty().append(data.game[0].page121);
         $("#toPage70").show();
         page70.page70();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page80 = __webpack_require__(31);
var page116 = __webpack_require__(44);
module.exports.page112 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage112").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page112").show().empty().append(data.game[0].page112);
         $("#toPage80, #toPage116").show();
         page80.page80();
         page116.page116();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var page123 = __webpack_require__(45);

module.exports.page116 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage116").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page116").show().empty().append(data.game[0].page116);
         $("#toPage123").show();
         page123.page123();
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.page123 = function () {

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
   }).done(function (data) {
      $("#toPage123").on("click", function () {
         $("#pages > p").hide();
         $("#btns > button").hide();
         $("#page123").show().empty().append(data.game[0].page123);
      });
   }).fail(function () {
      console.log("coś nie bangla...");
   });
};

/***/ })
/******/ ]);