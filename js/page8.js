let page7 = require("./page7.js");
let page12 = require("./page12.js");
module.exports.page8 = function(){
   
    $("#toPage7").on("click", ()=>{
       page7.page7();
     });
    
     $("#toPage12").on("click", ()=>{
      page12.page12();
   });
}