let page100 = require("./page100.js");
let page103 = require("./page103.js");
module.exports.page87 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage87").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page87").show().empty().append(data.game[0].page87);
      $("#toPage100, #toPage100").show();
    page100.page100();
    page103.page103();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}