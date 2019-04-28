let page14 = require("./page8.js");
module.exports.page4 = function(){
   $("#toPage4").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page4").show();
      $("#toPage14").show();
      page14.page14();
   });
}
