let page4 = require("./page4.js");
let page15 = require("./page15.js");
module.exports.page20 = function(){
   
   $("#toPage20").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page20").show();
      $("#toPage4, #toPage15").show();
      page4.page4();
      page15.page15();
   });
}
