let page11 = require("./page11.js");
module.exports.page12 = function(){
   $("#toPage12").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page12").show();
      $("#toPage11").show();
      page11.page11();
   });
}
