let page14 = require("./page14.js");
module.exports.page24 = function(){
   $("#toPage24").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page24").show();
      $("#toPage14").show();
      page14.page14();
   });
}
