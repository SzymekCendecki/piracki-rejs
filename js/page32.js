//let page50 = require("./page50.js");
module.exports.page23= function(){
   $("#toPage32").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page32").show();
      $("#toPage50").show();
    //  page50.page50();
   });
}
