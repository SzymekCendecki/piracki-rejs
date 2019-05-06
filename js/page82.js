let page110 = require("./page110.js");
let page96 = require("./page96.js");
module.exports.page82 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage82").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page82").show().empty().append(data.game[0].page82);
      $("#toPage110, #toPage96").show();
    page110.page110();
    page96.page96();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}