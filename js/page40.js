let page44 = require("./page44.js");
let page52 = require("./page52.js");
let page54 = require("./page54.js");
module.exports.page40 = function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage40").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page40").show().empty().append(data.game[0].page40);
      $("#toPage50, #toPage36").show();
    page44.page44();
    page52.page52();
    page54.page54();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}
