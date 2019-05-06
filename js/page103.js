let page107 = require("./page107.js");
let page112 = require("./page112.js");
module.exports.page103= function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage103").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page103").show().empty().append(data.game[0].page103);
      $("#toPage107, #toPage112").show();
    page107.page107();
    page112.page112();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}