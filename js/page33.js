let page20 = require("./page20.js");
module.exports.page33 = function(){
   $("#toPage33").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page33").show();
      $("#toPage20").show();
      page20.page20();
   });
}
