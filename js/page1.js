let page8 = require("./page8.js");
module.exports.page1 = function(){
   
    $("#toPage8").on("click", ()=>{
         $("#page1").hide();
         $("#page8").show().append(data.game[0].page8);
         $("#toPage7, #toPage12").show();
         page8.page8();
      });

   }
