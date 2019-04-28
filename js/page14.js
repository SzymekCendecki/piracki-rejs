let page23 = require("./page23.js");
let page28 = require("./page28.js");
module.exports.page14 = function(){
   
   $("#toPage14").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page14").show();
      $("#toPage23, #toPage28").show();
      page23.page23();
      page28.page28();
   });
}
