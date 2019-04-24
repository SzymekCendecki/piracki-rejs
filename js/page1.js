let page8 = require("./page8.js");
module.exports.page1 = function(){
   
    $("#toPage1").on("click", ()=>{
         $("#btns > button").hide();
         $("#page7").hide();
         $("#page1").show();
         $("#toPage8").show();
         page8.page8();
      });

   }
