let page7 = require("./page7.js");
module.exports.page8 = function(){
   
    $("#toPage7").on("click", ()=>{
       page7.page7();
     });
    
     $("#toPage12").on("click", ()=>{
      console.log("kapitan");
   });
}