let page50 = require("./page50.js");
let page87 = require("./page87.js");
module.exports.page70 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage70").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page70").show().empty().append(data.game[0].page70);
      $("#toPage50, #toPage87").show();
    page50.page50();
    page87.page87();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}