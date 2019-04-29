//let page50 = require("./page50.js");
//let page36 = require("./page36.js");
module.exports.page28 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage28").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page28").show().empty().append(data.game[0].page28);
      $("#toPage50, #toPage36").show();
    page50.page50();
    page36.page36();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}
