let page80 = require("./page80.js");
let page116 = require("./page116.js");
module.exports.page114= function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage114").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page114").show().empty().append(data.game[0].page114);
      $("#toPage80, #toPage116").show();
    page80.page80();
    page116.page116();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}