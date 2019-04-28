let page33 = require("./page33.js");
let page24 = require("./page24.js");
module.exports.page15 = function(){
   
   $("#toPage15").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page15").show();
      $("#toPage33, #toPage24").show();
      page33.page33(); 
      page24.page24();
   });
}
