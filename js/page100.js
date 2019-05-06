let page78 = require("./page78.js");
let page106 = require("./page106.js");
module.exports.page100= function(){

   $.ajax({
      url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
      type: 'GET',
      dataType: 'json'
  }).done((data)=>{
   $("#toPage100").on("click", ()=>{
      $("#pages > p").hide();
      $("#btns > button").hide();
      $("#page100").show().empty().append(data.game[0].page100);
      $("#toPage78, #toPage106").show();
    page78.page78();
    page106.page106();
   });
}).fail(()=>{ console.log("coś nie bangla..."); });

}