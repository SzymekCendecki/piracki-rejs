//import { equip } from "./game.js";
let intro = require("./intro.js");
let info = require("./info.js");
let rulez = require("./rulez.js");
let start = require("./start.js");

document.addEventListener("DOMContentLoaded", () => {
 
    $("#title, #subTitle, #warning, #task, #vehicleActive, #rulez, #equip, #page1, #page8").hide();

    intro.intro();
    info.info();
    rulez.rulez();
    start.start();
});
