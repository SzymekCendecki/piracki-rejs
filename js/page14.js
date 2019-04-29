let page23 = require("./page23.js");
let page28 = require("./page28.js");
module.exports.page14 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage14").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page14").show().empty().append(data.game[0].page14);
      $("#toPage23, #toPage28").show();
      page23.page23();
      page28.page28();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}
