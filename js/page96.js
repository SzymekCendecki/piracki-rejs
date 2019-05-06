let page14 = require("./page14.js");
let page70 = require("./page70.js");
let page66 = require("./page66.js");
let page50 = require("./page50.js");
module.exports.page96 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage96").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page96").show().empty().append(data.game[0].page96);
      $("#toPage14, #toPage70, #toPage66, #toPage50").show();
    page14.page14();
    page70.page70();
    page66.page66();
    page50.page50();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}