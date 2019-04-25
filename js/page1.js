let page8 = require("./page8.js");
module.exports.page1 = function(){
   $("#toPage1").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page1").show();
      $("#toPage8").show();
      page8.page8();
   });
}
