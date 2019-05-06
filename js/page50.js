let page63 = require("./page63.js");
let page57 = require("./page57.js");
module.exports.page50 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage50").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page50").show().empty().append(data.game[0].page50);
      $("#toPage63, #toPage57").show();
      page63.page63();
      page57.page57();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}