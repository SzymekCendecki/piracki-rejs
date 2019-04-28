//import { equip } from "./game.js";
let intro = require("./intro.js");
let info = require("./info.js");
let rulez = require("./rulez.js");
let start = require("./start.js");

document.addEventListener("DOMContentLoaded", () => {
 
    $("#title, #subTitle, #warning, #task, #vehicleActive, #rulez, #equip, #page1, #page7, #page8, #page11, #page12, #page14, #page15, #page20, #page23, #page24, #page28, #page32, #page33, #page36, #page40, #page42, #page44, #page47, #page50, #page52, #page54, #page57, #page63, #page66, #page70, #page72, #page77, #page78, #page80, #page82, #page87, #page90, #page91, #page96, #page100, #page103, #page106,  #page107, #page110,#page112, #page115, #page116, #page121, #page123").hide();
    $("#toPage1, #toPage4, #toPage7, #toPage8, #toPage11, #toPage12, #toPage14, #toPage15, #toPage20, #toPage23, #toPage24, #toPage28, #toPage32, #toPage33, #toPage36, #toPage40, #toPage42, #toPage44,#toPage47,#toPage50, #toPage52, #toPage54, #toPage57, #toPage63, #toPage66, #toPage70, #toPage72, #toPage77, #toPage78, #toPage80, #toPage82, #toPage87, #toPage90, #toPage91, #toPage96, #toPage100, #toPage103, #toPage106, #toPage107, #toPage110, #toPage112, #toPage115, #toPage116, #toPage121, #toPage123, #taskDone").hide();
  
    intro.intro();
    info.info();
    rulez.rulez();
    start.start();
});
