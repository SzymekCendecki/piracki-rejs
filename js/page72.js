let page82 = require("./page82.js");
let page100 = require("./page100.js");
module.exports.page72 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage72").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page72").show().empty().append(data.game[0].page72);
      $("#toPage82, #toPage100").show();
    page82.page82();
    page100.page100();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}