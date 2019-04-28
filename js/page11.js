let page20 = require("./page20.js");
module.exports.page11 = function(){
   $("#toPage11").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page11").show();
      $("#toPage20").show();
      page20.page20();
   });
}
